import { ref, onMounted, nextTick } from 'vue';
import { useSwipe } from '@vueuse/core';

export function useSwipeCard(cardRef: any, headerRef: any) {
  const headerHeight = ref(0);
  const screenHeight = ref(0);
  const cardHeight = ref(0);
  const minCardHeight = ref(0);
  const maxCardHeight = ref(0);
  const startCardHeight = ref(0);

  const updateHeaderHeight = () => {
    nextTick(() => {
      if (headerRef.value?.headerEl) {
        headerHeight.value = headerRef.value.headerEl.getBoundingClientRect().height;
        minCardHeight.value = headerHeight.value + 64;
        cardHeight.value = minCardHeight.value;
        maxCardHeight.value = screenHeight.value * 0.85;
      }
    });
  };

  const { lengthY, direction } = useSwipe(cardRef, {
    passive: false,
    onSwipeStart() {
      startCardHeight.value = cardHeight.value;
    },
    onSwipe() {
      const newHeight = startCardHeight.value + lengthY.value;
      cardHeight.value = Math.min(
        Math.max(newHeight, minCardHeight.value),
        maxCardHeight.value,
      );
    },
    onSwipeEnd() {
      const SWIPE_THRESHOLD = 100;
      const hasSwipedEnough =
        Math.abs(cardHeight.value - startCardHeight.value) > SWIPE_THRESHOLD;
      const isSwipingUp = direction.value === 'up';

      if (
        cardHeight.value + lengthY.value < maxCardHeight.value &&
        cardHeight.value + lengthY.value > minCardHeight.value
      ) {
        if (hasSwipedEnough) {
          cardHeight.value = isSwipingUp ? maxCardHeight.value : minCardHeight.value;
        } else {
          cardHeight.value = isSwipingUp ? minCardHeight.value : maxCardHeight.value;
        }
      }
    },
  });

  onMounted(() => {
    screenHeight.value = window.innerHeight;
  });

  return {
    cardHeight,
    updateHeaderHeight,
  };
}

<template>
  <section ref="cardRef" class="card" :style="cardStyle">
    <SpotCardHeader ref="headerRef" :header-info="headerInfo">
      <template #header-content>
        <ul class="tabs">
          <li
            class="tabs__control"
            v-for="tab in tabs"
            :key="tab.value"
            @click="activeTab = tab.value">
            <ui-fk-button :type="activeTab === tab.value ? 'active' : 'text'">
              {{ tab.name }}
            </ui-fk-button>
          </li>
        </ul>
      </template>
    </SpotCardHeader>
    <div class="card__content">
      <SpotCardReview v-if="activeTab === 'review'" />
      <SpotCardMedia v-if="activeTab === 'media'" />
      <SpotCardComments v-if="activeTab === 'comments'" />
    </div>
    <SpotCardFooter />
    <div class="card__close" @click="closeCard">
      <ui-fk-button>
        <nuxt-icon name="close" />
      </ui-fk-button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  SpotCardHeader,
  SpotCardFooter,
  SpotCardReview,
  SpotCardMedia,
  SpotCardComments,
  useSwipeCard,
} from '@/components/spot-card';
import type { IFishingSpot } from '@/types';

type Props = {
  spot: IFishingSpot;
};

const { spot } = defineProps<Props>();
const router = useRouter();

const activeTab = ref('review');
const tabs = [
  { name: 'Обзор', value: 'review' },
  { name: 'Медиа', value: 'media' },
  { name: 'Отзывы', value: 'comments' },
];

const cardRef = ref<HTMLElement | null>(null);
const headerRef = ref<InstanceType<typeof SpotCardHeader> | null>(null);

const { cardHeight, updateHeaderHeight } = useSwipeCard(cardRef, headerRef);

const cardStyle = computed(() => ({
  height: `${cardHeight.value}px`,
}));

const headerInfo = computed(() => ({
  name: spot.name,
  address: spot.address,
  coordinates: spot.coordinates as [number, number],
}));

function closeCard() {
  cardHeight.value = 0;
  cardRef.value && waitForTransitionEnd(cardRef.value, () => router.push('/'));
}

onMounted(() => updateHeaderHeight());
</script>

<style lang="scss" scoped>
.card {
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 100%;
  box-shadow: -3px 0 10px #000;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  transition: 0.2s height ease-out;

  &__content {
    height: 100%;
    background-color: $background;
    padding: 12px;
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

.tabs {
  display: flex;
  gap: 8px;
  padding: 0 12px 16px;
}

:deep(.nuxt-icon svg) {
  width: 24px;
  height: 24px;
}
</style>

<template>
  <SpotCard v-if="spot" :spot="spot" />
</template>

<script lang="ts" setup>
import { SpotCard } from '@/components/spot-card';
import type { IFishingSpot } from '@/types';

const route = useRoute();
const spot = ref<IFishingSpot | null>(null);

onMounted(() => {
  const spotId = route.params.id as string;

  spot.value = {
    id: 1,
    name: 'Пятилетка',
    address:
      'пруд Пятилетка, село Московское, Изобильненский муниципальный округ, Ставропольский край',
    coordinates: [41.942982, 45.318085],
  };
});
</script>

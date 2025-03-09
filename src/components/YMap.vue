<template>
  <div class="map">
    <yandex-map
      :settings="{
        location: {
          center: [41.9733, 45.0428],
          zoom: 9,
        },
        theme: themeMap
      }"
      height="100vh">
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
      </yandex-map-controls>

      <yandex-map-marker
        v-for="spot in spots"
        :key="spot.id"
        :settings="{ coordinates: spot.coordinates }"
        @click="goToSpot(spot.id)">
        <span style="color: green; cursor: pointer">{{ spot.name }}</span>
      </yandex-map-marker>
    </yandex-map>
  </div>
</template>

<script setup lang="ts">
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapZoomControl,
  YandexMapMarker,
} from 'vue-yandex-maps';
import type { IFishingSpot } from '@/types/FishingSpot';
import { useTheme } from '~/composables/useTheme';

const router = useRouter();
const { themeMap } = useTheme()

const spots: IFishingSpot[] = [
  {
    id: 1,
    name: 'Пятилетка',
    address:
      'пруд Пятилетка, село Московское, Изобильненский муниципальный округ, Ставропольский край',
    coordinates: [41.942982, 45.318085],
  },
];

function goToSpot(id: number) {
  router.push({ name: 'spot-id', params: { id } });
}
</script>

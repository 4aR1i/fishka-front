<template>
  <div class="map">
    <yandex-map
      :settings="{
        location: {
          center: [41.9733, 45.0428],
          zoom: 9,
        },
      }"
      height="100vh">
      <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
      <yandex-map-default-features-layer />
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control />
      </yandex-map-controls>

      <yandex-map-marker
        v-for="spot in spots"
        :key="spot.id"
        :position="'top-center left-center'"
        :settings="{ coordinates: spot.coordinates }"
        @click="goToSpot(spot.id)">
        <IconLocation class="map__marker" />
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

const router = useRouter();

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

<style lang="scss" scoped>
.map {

  &__marker {
    width: 36px;
    height: auto;
    color: #29ba29;
    cursor: pointer;
  }
}
</style>

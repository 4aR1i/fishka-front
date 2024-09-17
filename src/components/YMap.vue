<template>
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
      position="top-center left-center"
      :settings="{ coordinates: [41.942982, 45.318085] }">
      <img alt="logo" class="pin" :src="SpotIcon" />
    </yandex-map-marker>
  </yandex-map>
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
import SpotIcon from '@/shared/assets/vue.svg';
</script>

<style scoped></style>

<template>
  <section class="fishka">
    <YMap />
    <AuthControls />
    <FkModal ref="modal" />
  </section>
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue';
import YMap from '@/components/YMap.vue';
import AuthControls from '@/components/auth/AuthControls.vue';
import FkModal from '@/shared/components/FkModal.vue';

const modal = ref(null);
provide('modal', modal);
</script>

<style lang="scss" scoped>
.fishka {
  position: relative;
}
</style>

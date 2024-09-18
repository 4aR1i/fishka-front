<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/useAuthStore';
import { onBeforeMount } from 'vue';

const authStore = useAuthStore();

onBeforeMount(authStore.tokenVerification);
</script>

<style scoped></style>
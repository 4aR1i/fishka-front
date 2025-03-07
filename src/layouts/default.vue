<template>
  <main class="layout">
    <ButtonTheme />
    <BottomMenu />
    <slot />
    <YMap />
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.layout {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>

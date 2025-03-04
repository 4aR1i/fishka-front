<template>
  <div class="card__header header">
    <div class="header__control"></div>
    <div ref="headerEl" class="header__info">
      <h3 class="header__title">{{ headerInfo.name }}</h3>
      <p class="header__address">
        {{ headerInfo.address }}
      </p>
      <p class="header__coordinates">
        Координаты: {{ headerInfo.coordinates[0] }}, {{ headerInfo.coordinates[1] }}
      </p>
    </div>
    <slot name="header-content"></slot>
  </div>
</template>

<script lang="ts" setup>
type TCardHeaderInfo = {
  name: string;
  address: string;
  coordinates: [number, number];
};

type Props = {
  headerInfo: TCardHeaderInfo;
};

defineProps<Props>();
const headerEl = useTemplateRef('headerEl');

defineExpose({ headerEl });
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  background-color: $background-content;
  color: $main-text;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px 12px 16px;
  }

  &__title,
  &__address {
    width: 85%;
    word-wrap: break-word;
  }

  &__title {
    display: -webkit-box;
    line-clamp: 2;
    box-orient: vertical;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__coordinates {
    color: $secondary-text;
  }

  &__control {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 5px;
    background-color: $background-sidebar;
    border-radius: 4px;
  }
}
</style>

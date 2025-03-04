<template>
  <button :class="buttonClass" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
type Props = {
  type?: 'default' | 'primary' | 'text' | 'active';
  disabled?: boolean;
};

const { type = 'default', disabled = false } = defineProps<Props>();
const buttonClass = computed(() => `fk-button fk-button--${type}`);
</script>

<style lang="scss" scoped>
.fk-button {
  border-radius: $button-border-radius;
  padding: 10px;
  cursor: pointer;

  &--default {
    background-color: $background-button;
    color: $main-text;
  }

  &--primary {
    background-color: $background-button-primary;
    color: $main-text;
  }

  &--text {
    color: $secondary-text;
  }

  &--active {
    background-color: $background-button-active;
    color: $main-text;
  }
}
</style>

<template>
  <nav class="menu">
    <ul class="menu__list">
      <li
        v-for="(element, i) in menuElements"
        :key="i"
        class="menu__element element"
        :class="{ 'element--active': i === activeElementIndex }"
        @click="activeElementIndex = i">
        <NuxtLink :to="element.link" class="element__link">
          <div class="element__icon">
            <nuxt-icon :name="`menu/${element.icon}`" />
          </div>
          <span class="element__title">{{ element.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const menuElements = [
  { title: 'Поиск', link: '/', icon: 'tag' },
  { title: 'Админ\nПанель', link: '/admin-panel', icon: 'admin' },
  { title: 'Профиль', link: '/profile', icon: 'user' },
];

const activeElementIndex = ref(0);
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 64px;
  background-color: $background-sidebar;
  box-shadow: 0px 4px 10px #000;

  &__list {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
}

.element {
  padding: 8px;
  color: $secondary-text;
  cursor: pointer;

  &__link {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
  }

  &__title {
    font-size: 11px;
    text-align: center;
  }

  &--active {
    color: $primary-text;
  }
}

:deep(.nuxt-icon svg) {
  width: 24px;
  height: 24px;

  & path {
    fill: none !important;
  }
}
</style>

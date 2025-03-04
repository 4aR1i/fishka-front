<template>
  <div class="card__footer footer">
    <ul class="footer__actions">
      <li class="footer__action">
        <ui-fk-button>
          <nuxt-icon name="phone" />
        </ui-fk-button>
      </li>
      <li class="footer__action">
        <ui-fk-button>
          <nuxt-icon name="favorite" />
        </ui-fk-button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 64px;
  background-color: $background-sidebar;
  box-shadow: 0px 6px 10px #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;

  &__actions {
    display: flex;
    justify-content: start;
    gap: 8px;
  }
}

:deep(.nuxt-icon svg) {
  & path {
    fill: none !important;
  }
}
</style>

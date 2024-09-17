<template>
  <div class="auth">
    <div v-if="user" class="auth__user user">
      <span>{{ user.name }}</span>
      <ul class="user__options options">
        <li class="options__item options__item--exit" @click="logout">Выйти</li>
      </ul>
    </div>
    <div v-else class="auth__controls controls">
      <span class="controls__login" @click="openLoginForm">Вход</span>
      <span class="controls__register" @click="openRegisterForm">Регистрация</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue';
import AuthRegister from '@/components/auth/AuthRegister.vue';
import AuthLogin from '@/components/auth/AuthLogin.vue';
import { IModal } from '@/shared/types';
import { useAuthStore } from '@/store/useAuthStore';

const modal = inject<{ value: IModal }>('modal');
const authStore = useAuthStore();

const user = computed(() => authStore.user);
const logout = computed(() => authStore.logout);

function close() {
  modal?.value.close();
}

function openRegisterForm() {
  modal?.value.open(AuthRegister, {}, { close });
}

function openLoginForm() {
  modal?.value.open(AuthLogin, {}, { close });
}
</script>

<style lang="scss" scoped>
@import './auth.scss';
</style>

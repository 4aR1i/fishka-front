<template>
  <div class="auth__form form">
    <h3 class="form__title">Вход</h3>
    <div class="form__body">
      <div class="form__control">
        <label for="name">Имя</label>
        <input id="name" v-model="name" />
      </div>
      <div class="form__control">
        <label for="password">Пароль</label>
        <input id="password" v-model="password" />
      </div>
    </div>
    <div class="form__buttons">
      <button class="btn btn--default" @click="closeEmit">Отмена</button>
      <button class="btn btn--primary" @click="login">Ок</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useAuthStore } from '@/store/useAuthStore';

type Emits = {
  close: [];
};

const emits = defineEmits<Emits>();
const authStore = useAuthStore();

const name = ref('');
const password = ref('');

function closeEmit() {
  emits('close');
}

async function login() {
  if (await authStore.login(name.value, password.value)) {
    closeEmit();
  }
}
</script>

<style scoped>
@import './auth.scss';
</style>

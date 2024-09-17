<template>
  <div class="auth__form form">
    <h3 class="form__title">Регистрация</h3>
    <div v-if="isSuccessRegister" class="form__success">
      Пользователь успешно зарегистрирован. <span @click="openLoginForm">Войти</span>
    </div>
    <template v-else>
      <div class="form__body">
        <div class="form__control">
          <label for="name">Имя</label>
          <input id="name" v-model="name" />
        </div>
        <div class="form__control">
          <label for="email">Email</label>
          <input id="email" v-model="email" />
        </div>
        <div class="form__control">
          <label for="password">Пароль</label>
          <input id="password" v-model="password" />
        </div>
      </div>
      <div class="form__buttons">
        <button class="btn btn--default" @click="closeEmit">Отмена</button>
        <button class="btn btn--primary" @click="register">Ок</button>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue';
import AuthLogin from '@/components/auth/AuthLogin.vue';
import { useAuthStore } from '@/store/useAuthStore';
import { IModal } from '@/shared/types';

type Emits = {
  close: [];
};

const emits = defineEmits<Emits>();
const modal = inject<{ value: IModal }>('modal');
const authStore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const isSuccessRegister = ref(false);

function closeEmit() {
  emits('close');
}

function close() {
  modal?.value.closeAll();
}

async function register() {
  if (await authStore.register(name.value, email.value, password.value)) {
    isSuccessRegister.value = true;
  }
}

function openLoginForm() {
  modal?.value.open(AuthLogin, {}, { close });
}
</script>

<style lang="scss" scoped>
@import './auth.scss';
</style>

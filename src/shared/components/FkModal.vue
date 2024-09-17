<template>
  <div v-if="isActive" class="modal-wrapper" @click.self="closeAll">
    <div class="modal">
      <keep-alive v-if="shouldKeepAlive !== -1">
        <component
          :is="components[components.length - 1]"
          v-bind="propsData[propsData.length - 1]"
          v-on="eventsData[eventsData.length - 1]"></component>
      </keep-alive>
      <component
        :is="components[components.length - 1]"
        v-else
        v-bind="propsData[propsData.length - 1]"
        v-on="eventsData[eventsData.length - 1]"></component>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, shallowRef, type Component } from 'vue';

const components = shallowRef<Component[]>([]);
const propsData = ref<Record<string, unknown>[]>([]);
const eventsData = ref<Record<string, unknown>[]>([]);
const isActive = computed(() => !!propsData.value.length);
const shouldKeepAlive = ref(-1);

const open = (
  component: Component,
  props: Record<string, unknown>,
  events: Record<string, unknown>,
  keepAlive = false,
) => {
  components.value.push(component);
  propsData.value.push(props ?? {});
  eventsData.value.push(events ?? {});
  if (keepAlive && shouldKeepAlive.value === -1) {
    shouldKeepAlive.value = components.value.length - 1;
  }
};

const close = () => {
  components.value.pop();
  propsData.value.pop();
  eventsData.value.pop();
  if (components.value.length - 1 < shouldKeepAlive.value) shouldKeepAlive.value = -1;
};

const closeAll = () => {
  components.value = [];
  propsData.value = [];
  eventsData.value = [];
  shouldKeepAlive.value = -1;
};

defineExpose({
  open,
  close,
  closeAll,
});
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  & .modal {
    position: relative;
    min-width: 200px;
    min-height: 100px;
    max-height: 95vh;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 28px;
    overflow: auto;
  }
}
</style>

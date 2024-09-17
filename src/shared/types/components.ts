import { Component } from 'vue';

export interface IModal {
  open: (
    component: Component,
    props?: Record<string, unknown>,
    events?: Record<string, unknown>,
  ) => void;
  close: () => void;
  closeAll: () => void;
}

import { defineStore } from 'pinia'
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => {
    return {
      city: "Toronto",
      count: 0,
    }
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
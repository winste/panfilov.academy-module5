import { defineStore } from 'pinia'

export const useReserveStore = defineStore('reserveStore', {
  state: () => ({
    reserve: [],
  }),
  getters: {
    getReserve(state) {
      return state.reserve
    },
  },
  actions: {
    addReserve(data) {
      this.reserve = data
    },
  },
})

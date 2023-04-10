import { defineStore } from 'pinia'
import { API } from '../api/API'

export const useHotelStore = defineStore('hotelStore', {
  state: () => ({
    data: []
  }),
  getters: {
    getBannersAll(state) {
      return state.data
    }
  },
  actions: {
    async getData(route) {
      this.data = await API.fetchData(route)
    }
  }
})

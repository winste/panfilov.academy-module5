import { defineStore } from 'pinia'

export const useHotelStore = defineStore('hotelStore', {
    state: () => ({
      hotels: []
    }),
    getters: {
      getHotels(state) {
        return state.hotels
      },
    },
    actions: {
      addHotels(data) {
        this.hotels = data
      }
    }
  })
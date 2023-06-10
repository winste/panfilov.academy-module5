import { defineStore } from 'pinia'

export const useHotelStore = defineStore('hotelStore', {
    state: () => ({
      hotels: []
    }),
    getters: {
      getHotels(state) {
        return state.hotels
      },
      getFirstHotel(state) {
        return state.hotels[0]
      }
    },
    actions: {
      addHotels(data) {
        this.hotels = data
      }
    }
  })
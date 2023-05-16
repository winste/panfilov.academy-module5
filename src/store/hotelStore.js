import { defineStore } from 'pinia'
import { api } from '@/api/api.js'

export const useHotelStore = defineStore('hotelStore', {
    state: () => ({
      hotels: null
    }),
    getters: {
      getHotels(state) {
        return state.hotelsLatest
      },
    },
    actions: {
      addHotels(data) {
        this.hotels = data
      }
    }
  })
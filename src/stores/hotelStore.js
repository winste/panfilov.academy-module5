import { defineStore } from 'pinia'
import axios from 'axios'

export const useHotelStore = defineStore('hotelStore', {
    state: () => ({
      location: null,
      hotelOrderData: null
    }),
    getters: {
      getBannersAll(state) {
        return state.images
      }
    },
    actions: {
      async getHotelLocation() {
        try {
          await instanse.get('/hotel/location').then((res) => {
            this.images = res.data
          })
        } catch (error) {
          console.log(error)
        }
      },
      async sendHotelOrder() {
        try {
          await instanse.post('/hotel/order').then((res) => {
            this.images = res.data
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  })
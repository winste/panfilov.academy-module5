import { defineStore } from 'pinia'
import { api } from '@/api/api.js'

export const useHotelStore = defineStore('hotelStore', {
    state: () => ({
      hotelsList: null,
      hotelOrderData: null
    }),
    getters: {
      getHotelsAll(state) {
        return state.hotelsList
      }
    },
    actions: {

      async getData() {
        try {
          await api.fetchData('/hotel/featured').then((res) => {
            this.hotelsList = res.data
          })
        } catch (error) {
          console.log(error)
        }
      },

      async sendHotelOrder() {
        try {
          await api.postData('/hotel/order').then((res) => {
            // this.hotelsList = res.data
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
  })
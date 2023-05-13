import { defineStore } from 'pinia'
import { api } from '@/api/api.js'

export const useHotelStore = defineStore('hotelStore', {
    state: () => ({
      hotelsLatest: null,
      hotelsFeatured: null,
      hotelDetail: null
    }),
    getters: {
      getLatestHotels(state) {
        return state.hotelsLatest
      },
      getFeaturedHotels(state) {
        return state.hotelsFeatured
      },
      getHotelDetail(state) {
        return state.hotelDetail
      },
    },
    actions: {
      async fetchLatestHotels() {
        try {
          await api.fetchData('/hotel/latest').then((res) => {
            this.hotelsLatest = res.data
          })
        } catch (error) {
          console.log(error)
        }
      },

      async fetchFeaturedHotels() {
        try {
          await api.fetchData('/hotel/featured').then((res) => {
            this.hotelsFeatured = res.data
          })
        } catch (error) {
          console.log(error)
        }
      },

      async fetchHotelDetail(id) {
        try {
          await api.fetchData(`/hotel/detail/${id}`).then((res) => {
            this.hotelDetail = res.data
          })
        } catch (error) {
          console.log(error)
        }
      },
    }
  })
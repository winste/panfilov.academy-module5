import { defineStore } from 'pinia'
import { API } from '../api/API'

export const useBannerStore = defineStore('bannerStore', {
  state: () => ({
    images: []
  }),
  getters: {
    getBannersAll(state) {
      return state.images
    }
  },
  actions: {
    async getImages() {
      this.images = await API.fetchData('/banners')
      console.log(this.images);
    }
  }
})

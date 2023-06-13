<template>
  <main class="search">
    <VSearchMapSection
      v-if="hotelsInStore && firstHotelData"
      :coords="firstHotelData.coords"
      :image="firstHotelData.image"
      :id="firstHotelData._id"
      :name="firstHotelData.name"
      :address="firstHotelData.address"
      :properties="firstHotelData.info[0]"
      class="search__map"
    />

    <VSearchCardsSection
      v-if="hotelsInStore"
      :amount="hotels.length"
      :hotels="hotels"
      class="search__result"
    />
  </main>
</template>

<script>
import { api } from '@/api/api'
import { useHotelStore } from '@/store/hotelStore'
import VSearchCardsSection from '@/pages/SearchPage/VSearchCardsSection.vue'
import VSearchMapSection from '@/pages/SearchPage/VSearchMapSection.vue'

export default {
  components: {
    VSearchCardsSection,
    VSearchMapSection
  },
  data() {
    return {
      store: useHotelStore(),
      hotels: null,
      firstHotelId: null,
      firstHotelData: null
    }
  },

  computed: {
    hotelsInStore() {
      this.hotels = this.store.getHotels
      return this.store.getHotels
    }
  },

  watch: {
    hotels() {
      if (this.hotels.length) this.getFirstHotelId()
    },
    firstHotelId() {
      if (this.firstHotelId) this.getFirstfirstHotelData()
    }
  },

  methods: {
    getFirstHotelId() {
      this.firstHotelId = this.hotels[0]._id
    },
    async getFirstfirstHotelData() {
      await api
        .fetchData(`/hotel/detail/${this.firstHotelId}`)
        .then((response) => (this.firstHotelData = response.data))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-general';

.search {
  @include flexbox-general($gap: 15px, $flexWrap: nowrap);
  justify-content: space-between;
  &__map {
    order: 1;
  }
  &__result {
    padding: 90px 0px 90px 80px;
  }
}
</style>

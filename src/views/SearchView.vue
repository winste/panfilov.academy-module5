<template>
  <main class="search">
    <AppMetaTags :metaInfo="metaInfo" />
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
      :count="hotels.length"
      :hotels="hotels"
      class="search__result"
    />

    <h3 class="search__result" v-if="!hotelsInStore">No results for the given parameters</h3>
  </main>
  <AppErrorMessage v-if="error" :msg="error" />
</template>

<script>
import { api } from '@/api/api'
import { useHotelStore } from '@/store/hotelStore'
import VSearchCardsSection from '@/pages/SearchPage/VSearchCardsSection.vue'
import VSearchMapSection from '@/pages/SearchPage/VSearchMapSection.vue'
import AppMetaTags from '@/components/AppMetaTags.vue'
import metaTags from '@/helpers/metaTags'
import AppErrorMessage from '@/components/AppErrorMessage.vue'

export default {
  components: {
    VSearchCardsSection,
    VSearchMapSection,
    AppMetaTags,
    AppErrorMessage
  },
  data() {
    return {
      store: useHotelStore(),
      hotels: null,
      firstHotelId: null,
      firstHotelData: null,
      error: null,

      metaInfo: metaTags(
        'Search results',
        'Search result hotels for booking according to the given parameters',
        'hotels, booking hotels, search hotels, booking hotels in different countries, search hotels to the given parameters'
      )
    }
  },

  computed: {
    hotelsInStore() {
      this.hotels = this.store.getHotels
      return this.store.getHotels.length
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
        .catch((error) => (this.error = error.message))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.search {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  &__map {
    order: 1;
  }
  &__result {
    padding: 90px 30px 90px 80px;
  }
}

@media (max-width: 768px) {
  .search {
    &__result {
      padding: 70px 60px;
    }
  }
}

@media (max-width: 480px) {
  .search {
    &__result {
      padding: 40px 25px;
    }
  }
}
</style>

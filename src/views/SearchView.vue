<template>
  <main class="search">
    <AppMetaTags :meta-info="metaInfo" />
    <div v-if="hasHotelsInStore" class="search__result">
      <VSearchMapSection
        v-if="firstHotelData"
        :id="firstHotelData._id"
        :coords="firstHotelData.coords"
        :image="firstHotelData.image"
        :name="firstHotelData.name"
        :address="firstHotelData.address"
        :properties="firstHotelData.info[0]"
        class="search__map"
      />

      <VSearchCardsSection :count="hotels.length" :hotels="hotels" class="search__cards" />
    </div>
    <h3 v-if="!hasHotelsInStore" class="search__result">No results for the given parameters</h3>
    <AppErrorMessage :msg="error" />
  </main>
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
    AppErrorMessage,
  },
  data() {
    return {
      store: useHotelStore(),
      hotelsStore: null,
      hotels: null,
      firstHotelId: null,
      firstHotelData: null,
      error: null,

      metaInfo: metaTags(
        'Search results',
        'Search result hotels for booking according to the given parameters',
        'hotels, booking hotels, search hotels, booking hotels in different countries, search hotels to the given parameters'
      ),
    }
  },

  computed: {
    allHotelsInStore() {
      return this.store.getHotels
    },
    hasHotelsInStore() {
      return this.allHotelsInStore.length
    },
  },

  watch: {
    hotels() {
      if (this.hotels.length) this.getFirstHotelId()
    },
    firstHotelId() {
      if (this.firstHotelId) this.getFirstHotelData()
    },
  },

  created() {
    this.hotels = this.allHotelsInStore
  },

  methods: {
    getFirstHotelId() {
      this.firstHotelId = this.hotels[0]._id
    },
    async getFirstHotelData() {
      await api
        .fetchData(`/hotel/detail/${this.firstHotelId}`)
        .then((response) => (this.firstHotelData = response.data))
        .catch((error) => (this.error = error.message))
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.search {
  &__result {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
  &__map {
    order: 1;
  }
  &__cards {
    padding: 90px 30px 90px 80px;
  }
}

@media (max-width: 768px) {
  .search {
    &__cards {
      padding: 70px 60px;
    }
  }
}

@media (max-width: 480px) {
  .search {
    &__result {
      display: block;
    }
    &__cards {
      padding: 40px 25px;
    }
  }
}
</style>
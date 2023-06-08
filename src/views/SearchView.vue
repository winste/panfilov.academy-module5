<template>
  <main>
    {{ hotelData }}
    <div class="search">
      <h4 class="search__title">{{ hotelsInStore.length }} Results Found</h4>
      <div v-if="hotelsInStore.length" class="search__cards">
        <VSearchCard v-for="(hotel, index) in hotelsInStore" :key="index" :id="hotel._id" />
      </div>
    </div>
  </main>
</template>

<script>
import { api } from '@/api/api'
import { useHotelStore } from '@/store/hotelStore'
import VSearchCard from '@/pages/SearchPage/VSearchCard.vue'

export default {
  components: {
    VSearchCard
  },
  data() {
    return {
      store: useHotelStore(),
      firstHotelId: null,
      hotelData: null
    }
  },

  async unmounted() {
    this.firstHotelId = this.idHotels

    await api
      .fetchData(`/hotel/detail/${this.idHotels}`)
      .then((response) => (this.hotelData = response.data))
  },

  computed: {
    hotelsInStore() {
      return this.store.getHotels
    },
    idHotels() {
      return this.hotelsInStore[0]._id
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins/flexbox-direction';

.search {
  padding: 90px 80px;
  &__cards {
    @include flexbox-direction($direction: column, $gap: 78px);
    margin-top: 110px;
  }
}
</style>

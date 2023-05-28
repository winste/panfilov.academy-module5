<template>
  <main>
    <div v-if="store.getHotels.data !== undefined">
      <div class="search">
        <h4 class="search__title">{{ store.getHotels.data.length }} Results Found</h4>

        <div class="search__cards">
          <VSearchCard v-for="hotel in store.getHotels.data" :id="hotel._id" />
        </div>
      </div>
    </div>

    <div v-else>
      <p>No results for the given parameters</p>
    </div>
  </main>
</template>

<script>
import { useHotelStore } from '@/store/hotelStore'
import VSearchCard from '@/pages/SearchPage/VSearchCard.vue'

export default {
  components: {
    VSearchCard
  },
  data() {
    return {
      store: useHotelStore(),
      hotels: []
    }
  },
  computed() {
    return this.store.getHotels.data !== undefined
      ? (this.hotels = this.store.getHotels.data)
      : this.hotels
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins/flexbox-direction';

.search {
  padding: 90px 80px;
  &__title {
    margin-bottom: 110px;
  }
  &__cards {
    @include flexbox-direction($direction: column, $gap: 78px);
  }
}
</style>

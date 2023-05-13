<template>
  <section class="latest-section">
    <h2 class="latest-section__title">Latest on the Property Listing</h2>
    <div class="latest-section__cards">
      <VLatestSectionCard
        v-for="(card, index) in cards"
        :key="index"
        :id="card._id"
        :urlAvatar="card.author.avatar"
        :urlBg="card.image"
        :name="card.name"
        :address="card.address"
      />
    </div>
  </section>
</template>

<script>
import VLatestSectionCard from './VLatestSectionCard.vue'
import { useHotelStore } from '@/store/hotelStore'

export default {
  components: {
    VLatestSectionCard
  },
  data() {
    return {
      cards: []
    }
  },
  async created() {
    const store = useHotelStore()
    await store.fetchLatestHotels()
    this.cards = store.getLatestHotels
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/section-title';
.latest-section {
  &__title {
    @include section-title-style;
    margin-bottom: 101px;
  }
  &__cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
}
</style>

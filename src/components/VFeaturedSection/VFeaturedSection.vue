<template>
  <section class="featured-section">
    <h2 class="featured-section__title">Featured Properties on our Listing</h2>
    <div class="featured-section__cards">
      <VFeaturedSectionCard
        v-for="(card, index) in cards"
        :key="index"
        :carouselCard="card"
        class="featured-section__card"
      >
        <VInfoCard
          :cardId="card._id"
          :cardName="card.name"
          :cardAddress="card.address"
          cardNameFontSize="18px"
          class="featured-section__card-info"
        />
        <VCardPropertyInfo :propertyList="card.info" class="featured-section__card-property" />
      </VFeaturedSectionCard>
    </div>
  </section>
</template>

<script>
import { useHotelStore } from '@/store/hotelStore'
import VFeaturedSectionCard from './VFeaturedSectionCard.vue'
import VIcon from '../VIcon.vue'
import VInfoCard from '../VInfoCard.vue'
import Bedroom from '@/assets/images/icons/Bedroom.svg'
import Bathroom from '@/assets/images/icons/Bathroom.svg'
import VCardPropertyInfo from '../VCardPropertyInfo.vue'

export default {
  components: {
    VFeaturedSectionCard,
    VInfoCard,
    VIcon,
    VCardPropertyInfo
  },
  data() {
    return {
      cards: [],
      icon1: Bedroom,
      icon2: Bathroom
    }
  },
  async created() {
    const store = useHotelStore()
    await store.fetchFeaturedHotels()
    this.cards = store.getFeaturedHotels
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/section-title';

$cardSize: 382px;
.featured-section {
  &__title {
    @include section-title-style;
    margin-bottom: 81px;
  }
  &__cards {
    display: grid;
    grid-template-columns: calc($cardSize + 3px) $cardSize $cardSize;
    grid-gap: 65px 30px;
  }
  &__card {
    &-info {
      margin-bottom: 14px;
    }
  }
}
</style>

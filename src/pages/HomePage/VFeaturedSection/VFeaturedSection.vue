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
        <VCardTitleInfo
          :id="card._id"
          :name="card.name"
          :address="card.address"
          nameSize="18px"
          class="featured-section__card-info"
        />
        <VCardPropertyInfo :properties="card.info" class="featured-section__card-property" />
      </VFeaturedSectionCard>
    </div>
  </section>
</template>

<script>
import { api } from '@/api/api'
import Bedroom from '@/assets/images/icons/Bedroom.svg'
import Bathroom from '@/assets/images/icons/Bathroom.svg'
import VCardPropertyInfo from '@/components/VCardPropertyInfo.vue'
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import VFeaturedSectionCard from './VFeaturedSectionCard.vue'

export default {
  components: {
    VFeaturedSectionCard,
    VCardTitleInfo,
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
    await api.fetchData('/hotel/featured').then((response) => (this.cards = response.data))
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
    // grid-template-columns: calc($cardSize + 3px) $cardSize $cardSize;
    grid-template-columns: repeat(auto-fill, minmax($cardSize, 1fr));
    grid-gap: 65px 30px;
  }
  &__card {
    &-info {
      margin-bottom: 14px;
    }
  }
}
</style>

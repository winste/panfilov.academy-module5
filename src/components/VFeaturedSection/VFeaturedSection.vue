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
          :idCard="card._id"
          :nameCard="card.name"
          :addressCard="card.address"
          class="featured-section__card-info"
        />
        <VCardPropertyInfo :propertyList="card.info" class="featured-section__card-property" />
      </VFeaturedSectionCard>
    </div>
  </section>
</template>

<script>
import { api } from '@/api/api'
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
    await api.fetchData('/hotel/featured').then((response) => (this.cards = response.data))
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/section-title';
.featured-section {
  &__title {
    @include section-title-style;
    margin-bottom: 81px;
  }
  &__cards {
    display: grid;
    grid-template-columns: 385px 382px 382px;
    grid-gap: 65px 30px;
  }
  &__card {
    &-info {
      margin-bottom: 14px;
    }
  }
}
</style>

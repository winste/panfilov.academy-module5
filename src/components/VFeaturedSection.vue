<template>
  <VInfoSection title="Featured Properties on our Listing" class="featured-section">
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
  </VInfoSection>
</template>

<script>
import { api } from '../api/api'
import VFeaturedSectionCard from './VFeaturedSectionCard.vue'
import VIcon from './VIcon.vue'
import VInfoCard from './VInfoCard.vue'
import VInfoSection from './VInfoSection.vue'
import Bedroom from '@/assets/images/icons/Bedroom.svg'
import Bathroom from '@/assets/images/icons/Bathroom.svg'
import VCardPropertyInfo from './VCardPropertyInfo.vue'

export default {
  components: {
    VInfoSection,
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
.featured-section {
  &__cards {
    margin-top: 74px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 60px;
  }
  &__card {
    &-info {
      margin-bottom: 15px;
    }
  }
}
</style>

<template>
  <VInfoSection title="Featured Properties on our Listing" class="featured-section">
    <div class="featured-section__cards">
      <VFeaturedSectionCard
        v-for="(card, index) in cards"
        :key="index"
        :image="card.image"
        :price="card.price"
      >
        <VInfoCard :idCard="card._id" :nameCard="card.name" :addressCard="card.address" />
        <div class="featured-section__property">
          <span class="featured-section__property-item featured-section__bed">
            <VIcon :nameIcon="icon1" />
            {{ card.info[0].bedroom }}
          </span>
          <span class="featured-section__property-item featured-section__bath">
            <VIcon :nameIcon="icon2" />
            {{ card.info[0].bathroom }}
          </span>
        </div>
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
import BedIcon from '@/assets/images/BedIcon.svg'
import BathroomIcon from '@/assets/images/BathroomIcon.svg'
export default {
  components: {
    VInfoSection,
    VFeaturedSectionCard,
    VInfoCard,
    VIcon
  },
  data() {
    return {
      cards: [],
      icon1: BedIcon,
      icon2: BathroomIcon
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
  &__property {
    margin-top: 12px;
    display: flex;
    gap: 16px;
    &-item {
      display: flex;
      gap: 8px;
    }
  }
}
</style>

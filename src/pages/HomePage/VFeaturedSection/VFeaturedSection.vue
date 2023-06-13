<template>
  <section class="featured-section">
    <h2 class="featured-section__title">Featured Properties on our Listing</h2>
    <div class="featured-section__cards">
      <VFeaturedSectionCard
        v-for="card in cards"
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

        <VCardPropertiesInfo :properties="card.info[0]" />
      </VFeaturedSectionCard>
    </div>
  </section>
</template>

<script>
import { api } from '@/api/api'
import VCardPropertyInfo from '@/components/VCardPropertyInfo.vue'
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import VFeaturedSectionCard from './VFeaturedSectionCard.vue'
import VCardPropertiesInfo from '../../../components/VCardPropertiesInfo.vue'

export default {
  components: {
    VFeaturedSectionCard,
    VCardTitleInfo,
    VCardPropertyInfo,
    VCardPropertiesInfo
  },
  data() {
    return {
      cards: []
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
    grid-template-columns: repeat(auto-fill, minmax($cardSize, 1fr));
    grid-gap: 65px 30px;
  }
  &__card {
    &-info {
      margin-bottom: 14px;
    }
    &-properties {
      display: flex;
      gap: 21px;
    }
  }
}
</style>

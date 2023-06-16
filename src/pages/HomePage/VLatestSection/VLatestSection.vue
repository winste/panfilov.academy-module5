<template>
  <section class="latest-section">
    <h2 class="latest-section__title">Latest on the Property Listing</h2>
    <div class="latest-section__cards">
      <VLatestSectionCard
        v-for="(card, index) in cards"
        :key="index"
        :id="card._id"
        :avatar="card.author.avatar"
        :background="card.image"
        :name="card.name"
        :address="card.address"
        class="latest-section__card"
      />
    </div>
  </section>
</template>

<script>
import { api } from '@/api/api'
import VLatestSectionCard from './VLatestSectionCard.vue'

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
    await api.fetchData('/hotel/latest').then((response) => (this.cards = response.data))
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/section-title';
@import '@/assets/scss/mixins/flexbox-general';

.latest-section {
  &__title {
    @include section-title-style;
    margin-bottom: 101px;
  }
  &__cards {
    @include flexbox-general($gap: 30px);
    justify-content: center;
  }
  &__card {
    flex: 1 1 0;
  }
}
</style>

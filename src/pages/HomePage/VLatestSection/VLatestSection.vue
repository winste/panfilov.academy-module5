<template>
  <section id="latest" class="latest-section">
    <h2 class="latest-section__title">Latest on the Property Listing</h2>
    <div class="latest-section__cards">
      <VLatestSectionCard
        v-for="card in cards"
        :id="card._id"
        :key="card._id"
        :avatar="card.author.avatar"
        :background="card.image"
        :name="card.name"
        :address="card.address"
        class="latest-section__card"
      />
    </div>
    <AppErrorMessage v-if="error" :msg="error" />
  </section>
</template>

<script>
import { api } from '@/api/api'
import VLatestSectionCard from './VLatestSectionCard.vue'
import AppErrorMessage from '@/components/AppErrorMessage.vue'

export default {
  components: {
    VLatestSectionCard,
    AppErrorMessage,
  },

  data() {
    return {
      cards: [],
      error: null,
    }
  },

  async created() {
    await api
      .fetchData('/hotel/latest')
      .then((response) => (this.cards = response.data))
      .catch((error) => (this.error = error.message))
  },
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
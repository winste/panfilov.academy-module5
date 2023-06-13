<template>
  <section class="cards">
    <h3 class="cards__title">{{ amount }} Results Found</h3>
    <div v-if="amount" class="cards__list">
      <VSearchCard v-for="(hotel, index) in hotels" :key="index" :id="hotel._id" />
    </div>
  </section>
</template>

<script>
import VSearchCard from './VSearchCard.vue'

export default {
  components: {
    VSearchCard
  },

  props: {
    amount: {
      type: Number,
      default: 0
    },
    hotels: Array
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-direction';

.cards {
  &__title {
    font-size: 24px;
    letter-spacing: -0.3px;
  }
  &__list {
    @include flexbox-direction($direction: column, $gap: 78px);
    margin-top: 117px;
  }
}
</style>

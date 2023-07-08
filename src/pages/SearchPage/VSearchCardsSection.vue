<template>
  <section v-if="count" class="cards">
    <h3 class="cards__title">{{ count }} Results Found</h3>
    <div class="cards__list">
      <VSearchCard v-for="(hotel, index) in hotelsList" :id="hotel._id" :key="index" />
      <button v-if="checkDisplayed && !checkClick" class="cards__button" @click="showMore">
        Other as per found results...
      </button>
    </div>
  </section>
</template>

<script>
import VSearchCard from './VSearchCard.vue'

export default {
  components: {
    VSearchCard,
  },

  props: {
    count: { type: Number, required: true },
    hotels: { type: Number, required: true },
  },

  data() {
    return {
      countDisplayedHotels: 3,
      checkClick: false,
    }
  },

  computed: {
    checkDisplayed() {
      if (this.checkClick) return
      return this.hotels.length > this.countDisplayedHotels
    },

    hotelsList() {
      return this.checkDisplayed ? this.hotels.slice(0, this.countDisplayedHotels) : this.hotels
    },
  },

  methods: {
    showMore() {
      this.checkClick = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
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
  &__button {
    display: flex;
    align-self: start;
    font-size: 16px;
    font-weight: 700;
    background-color: transparent;
    color: $main-font-color;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>











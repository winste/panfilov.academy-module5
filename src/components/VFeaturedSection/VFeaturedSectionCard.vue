<template>
  <div class="featured-card">
    <VCarousel
      :carouselMainSlide="carouselCard.image"
      :carouselSlides="carouselCard.images"
      carouselWidth="382px"
      carouselHeight="340px"
    >
      <p class="featured-card__price">$ {{ formattedPrice }} USD</p>
    </VCarousel>
    <div class="featured-card__info">
      <slot>Card name and address info</slot>
    </div>
  </div>
</template>

<script>
import VCarousel from '../VCarousel/VCarousel.vue'

export default {
  components: {
    VCarousel,
  },
  props: {
    carouselCard: Object,
  },
  computed: {
    formattedPrice() {
      return this.carouselCard.price.map((price) => price.slice(1)).join('-')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.featured-card {
  display: flex;
  flex-direction: column;
  gap: 31px;
  &__price {
    font-size: 18px;
    font-weight: 600;
    color: $secondary-font-color;
  }
  &__info {
    margin-left: 2px;
  }
}
</style>

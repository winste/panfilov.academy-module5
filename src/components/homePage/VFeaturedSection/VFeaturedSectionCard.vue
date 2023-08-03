<template>
  <div class="featured-card">
    <VCarousel :slides="carouselCard.images" class="featured-card__carousel">
      <p class="featured-card__price">$ {{ correctPrice }} USD</p>
    </VCarousel>
    <div class="featured-card__info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VCarousel from '@/components/general/VCarousel.vue'
import formattedPrice from '@/helpers/formattedPrice'

export default {
  components: {
    VCarousel,
  },

  props: {
    carouselCard: {
      type: Object,
      required: true,
    },
  },

  computed: {
    correctPrice() {
      return formattedPrice.separateWithDash(this.carouselCard.price)
    },
  },
}
</script>

<style lang="scss" scoped>
.featured-card {
  justify-self: center;
  @include flexbox($direction: column, $gap: 30px);
  min-width: 384px;
  max-width: 100%;
  z-index: 0;
  &__carousel {
    border-radius: 12px;
  }
  &__price {
    font-size: 18px;
    font-weight: 600;
    color: $secondary-font-color;
  }
  &__info {
    margin-left: 2px;
  }
}

@media (max-width: 480px) {
  .featured-card {
    min-width: auto;
    gap: 10px;
  }
}
</style>
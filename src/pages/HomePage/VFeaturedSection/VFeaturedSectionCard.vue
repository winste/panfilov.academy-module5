<template>
  <div class="featured-card">
    <VCarousel
      :slides="carouselCard.images"
      width="382px"
      height="340px"
      class="featured-card__carousel"
    >
      <p class="featured-card__price">$ {{ correctPrice }} USD</p>
    </VCarousel>
    <div class="featured-card__info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VCarousel from '@/components/VCarousel.vue'
import { formattedPrice } from '@/helpers/formattedPrice'

export default {
  components: {
    VCarousel
  },

  props: {
    carouselCard: Object
  },

  computed: {
    correctPrice() {
      return formattedPrice.deleteCharacterHyphen(this.carouselCard.price)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-direction';

.featured-card {
  justify-self: center;
  @include flexbox-direction($direction: column, $gap: 27px);
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
</style>

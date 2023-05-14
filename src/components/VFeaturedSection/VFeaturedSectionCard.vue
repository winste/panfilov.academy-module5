<template>
  <div class="featured-card">
    <VSwiper :slides="carouselCard.images" width="382px" height="340px">
      <p class="featured-card__price">$ {{ formattedPrice }} USD</p>
    </VSwiper>
    <div class="featured-card__info">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import VSwiper from '../VSwiper.vue'

export default {
  components: {
    VSwiper
  },
  props: {
    carouselCard: Object
  },
  computed: {
    formattedPrice() {
      return this.carouselCard.price.map((price) => price.slice(1)).join('-')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-direction';

.featured-card {
  @include flexbox-direction($direction: column, $gap: 31px);
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

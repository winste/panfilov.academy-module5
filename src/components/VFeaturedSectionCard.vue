<template>
  <div class="featured-card">
    <VCardCarousel :carouselSlides="carouselCard.images">
      <p class="featured-card__price">
        $ {{ carouselCard.price[0].slice(1) }} - {{ carouselCard.price[1].slice(1) }} USD
      </p>
    </VCardCarousel>
    <div class="featured-card__info">
      <slot>Card name and address info</slot>
    </div>
  </div>
</template>

<script>
import VCardCarousel from './VCardCarousel.vue'
import VIcon from './VIcon.vue'
import Like from '@/assets/images/icons/Like.svg'

export default {
  components: {
    VIcon,
    VCardCarousel
  },
  data() {
    return {
      icon: Like
    }
  },
  props: {
    carouselCard: Object
  }
}
</script>

<style lang="scss" scoped>
.featured-card {
  display: flex;
  flex-direction: column;
  gap: 30px;
  &__price {
    font-size: 18px;
    font-weight: 600;
    color: rgba(154, 154, 154, 1);
  }
}
</style>

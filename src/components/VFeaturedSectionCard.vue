<template>
  <div class="featured-card">
    <VCarousel :carouselSlides="carouselCard.images" />
    <div class="featured-card__info">
      <slot>Card name and address info</slot>
    </div>
  </div>
</template>

<script>
import VCarousel from './VCarousel.vue'
import VIcon from './VIcon.vue'
import Like from '@/assets/images/icons/Like.svg'

export default {
  components: {
    VIcon,
    VCarousel
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
  &__content {
    width: 382px;
    height: 340px;
    background-color: rgba(224, 226, 230, 1);
    border-radius: 12px;
    background-size: cover;
  }
}
</style>

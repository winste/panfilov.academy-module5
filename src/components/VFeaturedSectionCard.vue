<template>
  <div class="featured-card">
    <div class="featured-card__content" :style="urlBackground">
      <VIcon :nameIcon="icon" width="26" height="23" class="featured-card__icon" />
      <span class="featured-card__price"> $ {{ formattedPrice }} USD </span>
    </div>
    <div class="featured-card__info">
      <slot>Card name and address info</slot>
    </div>
  </div>
</template>

<script>
import VIcon from './VIcon.vue'
import Like from '@/assets/images/icons/Like.svg'

export default {
  components: {
    VIcon
  },
  data() {
    return {
      icon: Like
    }
  },
  props: {
    image: String,
    price: Object
  },
  computed: {
    urlBackground() {
      return `background-image: url("${this.image}");`
    },
    formattedPrice() {
      return `${this.price[0].slice(1)} - ${this.price[1].slice(1)}`
    }
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
  }
}
</style>

<template #slides>
  <carousel>
    <slide v-for="slide in slides" :key="slide.id" class="slide">
      <div :style="{ backgroundImage: `url(${slide})` }" class="slide__image"></div>
    </slide>
    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import VIcon from './VIcon.vue'
import Like from '@/assets/images/icons/Like.svg'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    VIcon
  },
  data() {
    return {
      icon: Like
    }
  },
  props: {
    slides: Array
  }
}
</script>

<style lang="scss">
.slide {
  width: 382px;
  height: 340px;
  &__image {
    padding: 24px 22px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
}
</style>

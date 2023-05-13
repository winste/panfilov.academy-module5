<template>
  <div class="wrap">
    <carousel :items-to-show="1" class="carius">
      <slide
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ 'background-image': `url(${slide})` }"
        class="slide"
      >
      </slide>
      <template #addons>
        <pagination class="pagin" />
      </template>
    </carousel>
    <div>
      <button @click="next()">Next</button>
      <input type="number" min="0" max="9" v-model="currentSlide" />
      <button @click="prev()">Prev</button>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import VCarouselPagination from './VCarousel/VCarouselPagination.vue'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    VCarouselPagination
  },
  props: {
    slides: Array
  },
  data: () => ({
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center'
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start'
      }
    }
  }),
  methods: {
    switchSlide(id) {
      myCarousel.data.currentSlide = id
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins/background-position';

.slide {
  width: 382px;
  height: 340px;
  @include background-position;
}

.text {
  border: 1px solid red;
}
</style>

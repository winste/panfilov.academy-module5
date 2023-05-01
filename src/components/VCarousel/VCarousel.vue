<template>
  <div class="carousel-wrapper">
    <div :style="{ 'margin-left': `-${100 * currentSlideIndex}%` }" class="carousel">
      <div
        v-for="(slide, index) in carouselSlides"
        :key="index"
        :style="{ 'background-image': `url(${slide})` }"
        class="carousel__slide"
      ></div>
    </div>

    <div class="carousel__content">
      <slot></slot>
    </div>

    <div class="carousel__interaction">
      <VButtonFavorite @click="addToFavorites" class="carousel__button" />
      <VCarouselPagination
        :slideCount="carouselSlides.length"
        :slideIndex="currentSlideIndex"
        @switch="switchSlide"
        class="carousel__pagination"
      />
    </div>
  </div>
</template>

<script>
import VButtonFavorite from '../VButtonFavorite.vue'
import VCarouselPagination from './VCarouselPagination.vue'

export default {
  startX: null,
  endX: null,

  components: {
    VButtonFavorite,
    VCarouselPagination
  },
  props: {
    carouselMainBackground: {
      type: String
    },
    carouselSlides: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentSlideIndex: 0,
      isFavorite: false
    }
  },
  methods: {
    switchSlide(id) {
      this.currentSlideIndex = id
    },
    addToFavorites() {
      this.isFavorite = !this.isFavorite
    }
  }
}
</script>

<style lang="scss" scoped>
$slideWidth: 382px;
$slideHeight: 340px;
.carousel-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: $slideWidth;
  min-height: $slideHeight;
  padding: 21px 18px 19px 23px;
  overflow: hidden;
  border-radius: 12px;
}

.carousel {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  transition: all ease 0.5s;
  z-index: -111;
  &__interaction {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__content,
  &__button {
    align-self: end;
  }
  &__slide {
    width: $slideWidth;
    height: $slideHeight;
    background-size: cover;
    z-index: -111;
  }
  &__pagination {
    margin-right: 2px;
    margin-bottom: 5px;
  }
}
</style>

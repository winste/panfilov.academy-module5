<template>
  <div @pointerdown="switchSlideTouch" class="carousel-wrapper">
    <div :style="{ 'margin-left': `-${100 * currentSlideIndex}%` }" class="carousel">
      <div
        v-for="(slide, index) in carouselSlides"
        :key="index"
        :style="{ 'background-image': `url(${slide})` }"
        class="carousel__slide"
      ></div>
    </div>

    <VButtonIcon
      :buttonIcon="carouselIcon"
      :buttonWidth="30"
      :buttonHeigh="30"
      @click="addToFavorites"
      class="carousel__button"
    />

    <div class="carousel__interaction">
      <div class="carousel__interaction-wrapper">
        <slot></slot>
        <VCarouselPagination
          :slideCount="carouselSlides.length"
          :slideIndex="currentSlideIndex"
          @switch="switchSlide"
          class="carousel__pagination"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VCarouselPagination from './VCarouselPagination.vue'
import VButtonIcon from '../VButtonIcon.vue'
import Like from '@/assets/images/icons/Like.svg'

export default {
  components: {
    VCarouselPagination,
    VButtonIcon
  },
  props: {
    carouselSlides: {
      type: Array,
      default: () => []
    },
    carouselWidth: String,
    carouselHeight: String
  },
  data() {
    return {
      currentSlideIndex: 0,
      carouselIcon: Like
    }
  },
  methods: {
    switchSlide(id) {
      this.currentSlideIndex = id
    },
    switchSlideTouch(e) {
      console.log(e.clientX)
      let startX = e.clientX
      let endX = null
      document.querySelector('carousel-wrapper').addEventListener('pointerup', () => {
        endX = e.clientX
      })(startX - endX > 0)
        ? this.currentSlideIndex++
        : this.currentSlideIndex--
    },
    addToFavorites() {
      this.isFavorite = !this.isFavorite
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/background-position';

$elements-padding: 21px 18px 19px 23px;
.carousel-wrapper {
  position: relative;
  display: flex;
  max-width: v-bind(carouselWidth);
  min-height: v-bind(carouselHeight);
  overflow: hidden;
  border-radius: 12px;
}

.carousel {
  display: flex;
  transition: all ease 0.5s;
  z-index: -111;
  &__button {
    margin: $elements-padding;
    position: absolute;
    top: 0;
    right: 0;
  }
  &__slide {
    width: v-bind(carouselWidth);
    height: v-bind(carouselHeight);
    @include background-position;
    background-color: $card-bg-color;
    z-index: -111;
  }
  &__interaction {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: $elements-padding;
    min-width: 100%;
    &-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
  &__pagination {
    margin-right: 2px;
    margin-bottom: 5px;
  }
}
</style>

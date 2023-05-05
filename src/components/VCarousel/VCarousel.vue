<template>
  <div class="carousel-wrapper">
    <div
      :style="{ 'margin-left': `-${100 * currentSlideIndex}%` }"
      class="carousel"
    >
      <div
        v-if="carouselMainSlide"
        :style="{ 'background-image': `url(${carouselMainSlide})` }"
        class="carousel__slide"
      ></div>
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
      <VButtonIcon
        :buttonIcon="carouselIcon"
        :buttonWidth="30"
        :buttonHeigh="30"
        @click="addToFavorites"
        class="carousel__button"
      />
      <VCarouselPagination
        :slideCount="slideCounting"
        :slideIndex="currentSlideIndex"
        @switch="switchSlide"
        class="carousel__pagination"
      />
    </div>
  </div>
</template>

<script>
import VButtonIcon from '../VButtonIcon.vue'
import VCarouselPagination from './VCarouselPagination.vue'
import Like from '../../assets/images/icons/Like.svg'

export default {
  components: {
    VButtonIcon,
    VCarouselPagination,
  },
  props: {
    carouselMainSlide: {
      type: String,
    },
    carouselSlides: {
      type: Array,
      default: () => [],
    },
    carouselWidth: String,
    carouselHeight: String,
  },
  data() {
    return {
      carouselIcon: Like,
      currentSlideIndex: 0,
      isFavorite: false,
    }
  },
  computed: {
    slideCounting() {
      return this.carouselMainSlide
        ? this.carouselSlides.length + 1
        : this.carouselSlides.length
    },
  },
  methods: {
    switchSlide(id) {
      this.currentSlideIndex = id
    },
    addToFavorites() {
      this.isFavorite = !this.isFavorite
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/background-position';

.carousel-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: v-bind(carouselWidth);
  min-height: v-bind(carouselHeight);
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
    width: v-bind(carouselWidth);
    height: v-bind(carouselHeight);
    @include background-position;
    background-color: $card-bg-color;
    z-index: -111;
  }
  &__pagination {
    margin-right: 2px;
    margin-bottom: 5px;
  }
}
</style>

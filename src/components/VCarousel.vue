<template>
  <Swiper :slides-per-view="1" @swiper="onSwiper" class="swiper">
    <SwiperSlide
      v-for="slide in slides"
      :style="{ 'background-image': `url(${slide})` }"
      class="swiper__slide"
    >
    </SwiperSlide>

    <AppButtonIcon :buttonIcon="icon" :buttonWidth="30" :buttonHeigh="30" class="swiper__button" />

    <div class="swiper__interaction">
      <div class="swiper__interaction-wrapper">
        <slot></slot>
        <VCarouselPagination
          :slideCount="slides.length"
          :slideIndex="currentSlideIndex()"
          @switch="switchSlideByButton"
          @click="slideToIndex(buttonIndex)"
          class="swiper__pagination"
        />
      </div>
    </div>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import Like from '@/assets/images/icons/Like.svg'
import AppButtonIcon from '@/components/AppButtonIcon.vue'
import VCarouselPagination from './VCarousel.Pagination.vue'

export default {
  name: 'Carousel',
  components: {
    Swiper,
    SwiperSlide,
    AppButtonIcon,
    VCarouselPagination
  },

  props: {
    slides: Array,
    width: String,
    height: String
  },

  data() {
    return {
      buttonIndex: 0,
      swiper: null,
      icon: Like
    }
  },

  methods: {
    onSwiper(swiper) {
      this.swiper = swiper
    },
    switchSlideByButton(id) {
      this.buttonIndex = id
    },
    slideToIndex(index) {
      this.swiper.slideTo(index)
    },
    currentSlideIndex() {
      return this.swiper ? this.swiper.activeIndex : this.buttonIndex
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/background-position';
@import '@/assets/scss/mixins/carousel-elements-position';

$element-indent: 21px 18px 19px 23px;

.swiper {
  position: relative;
  max-width: v-bind(width);
  height: v-bind(height);
  margin: 0;
  &__slide {
    max-width: v-bind(width);
    height: v-bind(height);
    @include background-position;
  }
  &__button {
    margin: $element-indent;
    @include carousel-elements-position(top);
  }
  &__interaction {
    @include carousel-elements-position(bottom);
    min-width: 100%;
    padding: $element-indent;
    &-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

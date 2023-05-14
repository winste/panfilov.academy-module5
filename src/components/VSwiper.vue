<template>
  <swiper :slides-per-view="1" @swiper="onSwiper" class="swiper">
    <swiper-slide
      v-for="slide in slides"
      :style="{ 'background-image': `url(${slide})` }"
      class="swiper__slide"
    >
    </swiper-slide>

    <VButtonIcon :buttonIcon="icon" :buttonWidth="30" :buttonHeigh="30" class="swiper__button" />

    <div class="swiper__interaction">
      <div class="swiper__interaction-wrapper">
        <slot></slot>
        <VCarouselPagination
          :slideCount="slides.length"
          :slideIndex="currentSlideIndex()"
          @switch="switchSlideButton"
          @click="slideToIndex(buttonIndex)"
          class="swiper__pagination"
        />
      </div>
    </div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import VCarouselPagination from './VCarousel/VCarouselPagination.vue'
import VButtonIcon from './VButtonIcon.vue'
import Like from '@/assets/images/icons/Like.svg'

export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
    VButtonIcon,
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
    switchSlideButton(id) {
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
.swiper {
  position: relative;
  width: v-bind(width);
  height: v-bind(height);
  border-radius: 12px;
  &__slide {
    width: v-bind(width);
    height: v-bind(height);
    @include background-position;
  }
  &__button {
    margin: 21px 18px 19px 23px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 111;
  }
  &__interaction {
    position: absolute;
    bottom: 0;
    right: 0;
    min-width: 100%;
    padding: 21px 18px 19px 23px;
    z-index: 111;
    &-wrapper {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

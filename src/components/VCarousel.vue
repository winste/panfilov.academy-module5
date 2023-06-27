<template>
  <Swiper :slides-per-view="1" @swiper="onSwiper" class="swiper">
    <SwiperSlide
      v-for="slide in slides"
      :style="{ 'background-image': `url(${slide})` }"
      class="swiper__slide"
    >
    </SwiperSlide>

    <AppButtonIcon :icon="icon" :width="30" :heigh="30" class="swiper__button" />

    <div class="swiper__interaction">
      <div class="swiper__interaction-wrapper">
        <slot></slot>
        <VCarouselPagination
          :slideCount="slides.length"
          :slideIndex="currentSlideIndex()"
          :position="paginationPosition"
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
    height: String,
    block: {
      type: String,
      default: 'featured'
    }
  },

  data() {
    return {
      buttonIndex: 0,
      swiper: null,
      icon: Like
    }
  },

  computed: {
    indent() {
      return this.block == 'search' ? '23px 22px 28px 26px' : '21px 18px 19px 23px'
    },
    paginationPosition() {
      return this.block == 'search' ? 'end' : 'center'
    },
    paginationMargin() {
      return this.block == 'search' ? '6px' : '3px'
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
@import '@/assets/scss/mixins/flexbox-general';

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
    margin: v-bind(indent);
    @include carousel-elements-position(top);
  }
  &__interaction {
    @include carousel-elements-position(bottom);
    min-width: 100%;
    padding: v-bind(indent);
    padding-top: 0;
    &-wrapper {
      @include flexbox-general($gap: 15px);
      justify-content: space-between;
    }
  }
  &__pagination {
    margin-right: v-bind(paginationMargin);
  }
}
</style>

<template>
  <Swiper :slides-per-view="1" class="swiper" @swiper="onSwiper">
    <SwiperSlide
      v-for="slide in slides"
      :key="slide"
      :style="{ 'background-image': `url(${slide})` }"
      class="swiper__slide"
    >
    </SwiperSlide>

    <AppButtonIcon :icon="icon" :width="30" :heigh="30" class="swiper__button" />

    <div class="swiper__interaction">
      <div class="swiper__interaction-wrapper">
        <slot></slot>
        <VCarouselPagination
          :slide-count="slides.length"
          :slide-index="currentSlideIndex()"
          :position="paginationPosition"
          class="swiper__pagination"
          @switch="switchSlideByButton"
          @click="slideToIndex(buttonIndex)"
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
  name: 'CarouselSlider',
  components: {
    Swiper,
    SwiperSlide,
    AppButtonIcon,
    VCarouselPagination,
  },

  props: {
    slides: {
      type: Array,
      required: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '340px',
    },
    block: {
      type: String,
      default: 'featured',
    },
  },

  data() {
    return {
      buttonIndex: 0,
      swiper: null,
      icon: Like,
    }
  },

  computed: {
    // в зависимости от роута к карусели применяются разные стили
    indent() {
      return this.block == 'search' ? '23px 22px 28px 26px' : '21px 18px 19px 23px'
    },
    paginationPosition() {
      return this.block == 'search' ? 'end' : 'center'
    },
    paginationMargin() {
      return this.block == 'search' ? '6px' : '3px'
    },
  },

  methods: {
    // метод свайпера для работы
    onSwiper(swiper) {
      this.swiper = swiper
    },
    // для переключения слайда при клике на пагинацию
    switchSlideByButton(id) {
      this.buttonIndex = id
    },
    // для переключения активного индикатора в зависимости от текущего слайда
    slideToIndex(index) {
      this.swiper.slideTo(index)
    },
    // для передачи номера активного слайда в пагинацию
    currentSlideIndex() {
      return this.swiper ? this.swiper.activeIndex : this.buttonIndex
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  max-width: v-bind(width);
  height: v-bind(height);
  margin: 0;
  background-color: #e0e2e6;
  &__slide {
    max-width: v-bind(width);
    height: v-bind(height);
    @include background-position;
  }
  &__button {
    position: absolute;
    right: 0;
    top: 0;
    margin: v-bind(indent);
    z-index: 111;
  }
  &__interaction {
    position: absolute;
    bottom: 0;
    min-width: 100%;
    padding: v-bind(indent);
    padding-top: 0;
    z-index: 111;
    &-wrapper {
      @include flexbox($gap: 15px, $justify-content: space-between);
    }
  }
  &__pagination {
    margin-right: v-bind(paginationMargin);
  }
}
</style>
<template>
  <div class="carousel-wrapper">
    <div class="carousel" :style="{ 'margin-left': `-${100 * curentSlideIndex}%` }">
      <div v-for="(slide, index) in carouselSlides" :key="index" class="slide">
        <div :style="{ 'background-image': `url(${slide})` }" class="carousel__slide"></div>
      </div>
    </div>

    <div class="carousel__content"><slot></slot></div>

    <div class="carousel__interaction">
      <VButtonFavorite class="carousel__button" @click="addToFavorites" />
      <VCardPagination :slideCount="carouselSlides.length - 1" @switch="switchSlide" />
    </div>
  </div>
</template>

<script>
import VButtonFavorite from './VButtonFavorite.vue'
import VCardPagination from './VCardPagination.vue'

export default {
  components: {
    VButtonFavorite,
    VCardPagination
  },
  props: {
    carouselSlides: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      curentSlideIndex: 0,
      isFavorite: false
    }
  },
  methods: {
    switchSlide(id) {
      this.curentSlideIndex = id
    },
    addToFavorites() {
      this.isFavorite = !this.isFavorite
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 384px;
  height: 340px;
  padding: 24px;
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
}

.carousel__interaction {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.carousel__content,
.carousel__button {
  align-self: end;
}

.slide {
  width: 384px;
  height: 340px;
  flex: 0 0 auto;
}

.carousel__slide {
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -111;
}
</style>

<template>
  <section class="gallery">
    <div class="gallery__main" :style="{ 'background-image': `url(${galleryMainImage})` }">
      <VAvatar :avatarUrl="avatarUrl" />
      <div class="gallery__text">
        <p class="gallery__text-item">Listed By:</p>
        <p class="gallery__text-author">{{ authorName }}</p>
        <p class="gallery__text-price">For: {{ formattedPrice }}</p>
      </div>
    </div>
    <div class="gallery__images">
      <VueGallery :images="galleryImages" :index="index" @close="index = null"></VueGallery>
      <div
        v-for="(image, imageIndex) in galleryImages"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
        :class="
          imageIndex == countDisplayedImages
            ? 'gallery__image gallery__image--btn'
            : 'gallery__image'
        "
      ></div>
    </div>
  </section>
</template>

<script>
import VueGallery from 'vue-gallery'
import VAvatar from '../VAvatar.vue'

export default {
  components: {
    VAvatar,
    VueGallery
  },
  props: {
    avatarUrl: String,
    authorName: String,
    price: Array,
    galleryMainImage: String,
    galleryImages: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      countDisplayedImages: 3,
      galleryOpen: false,
      index: null,
      showList: this.galleryImages.slice(0, this.countDisplayedImages)
    }
  },
  computed: {
    restImagesCount() {
      return this.galleryImages.length - this.countDisplayedImages
    },
    btnStartImage() {
      return this.galleryImages[this.countDisplayedImages]
    },
    formattedPrice() {
      return this.price.map((price) => price.replace('$', '$ ')).join(' - ')
    }
  },
  mounted() {
    this.$el.lastChild.children[4].innerHTML = `
        <span class="gallery__image-number">+${this.restImagesCount} </span>
        <span class="gallery__image-text"
          >More <span class="gallery__image-subtext">Photos</span>
        </span>
        `
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/background-position';

.gallery {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 17px;
  &__main {
    display: flex;
    align-items: end;
    gap: 20px;
    width: 669px;
    height: 540px;
    padding: 65px 54px;
    background-color: rgba(194, 198, 204, 1);
    border-radius: 16px;
    background-image: v-bind(galleryMainImage);
    @include background-position;
  }
  &__text {
    display: flex;
    flex-direction: column;
    &-item {
      font-weight: 500;
      font-size: 12px;
    }
    &-author {
      font-weight: 700;
      font-size: 18px;
    }
  }
  &__images {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  &__image {
    width: 315px;
    height: 260px;
    background-color: rgba(194, 198, 204, 1);
    @include background-position;
    border-radius: 8px;
    cursor: pointer;
    &-number {
      font-weight: 700;
      font-size: 48px;
      z-index: 111;
    }
    &-text {
      display: flex;
      flex-direction: column;
      align-items: start;
      z-index: 111;
    }
    &-subtext {
      font-weight: 700;
      font-size: 18px;
    }
    &--btn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>

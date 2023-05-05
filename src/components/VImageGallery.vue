<template>
  <section class="gallery">
    <div
      class="gallery__main"
      :style="{ 'background-image': `url(${galleryMainImage})` }"
    ></div>
    <div class="gallery__images">
      <div
        v-for="(image, index) in galleryImages.slice(0, 4)"
        :key="index"
        :style="{ 'background-image': `url(${image})` }"
        class="gallery__image"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    galleryMainImage: String,
    galleryImages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/background-position';

.gallery {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 17px;
  &__main {
    width: 669px;
    height: 540px;
    background-color: rgba(194, 198, 204, 1);
    border-radius: 16px;
    background-image: v-bind(galleryMainImage);
    @include background-position;
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
    &-more {
      width: 315px;
      height: 260px;
      background-color: rgba(194, 198, 204, 1);
      border-radius: 8px;
    }
  }
}
</style>

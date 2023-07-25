<template>
  <section class="gallery">
    <VueGallery :images="images" :index="index" class="gg" @close="index = null"></VueGallery>
    <div
      v-for="(image, imageIndex) in displayedImages"
      :key="imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      :class="
        imageIndex == countDisplayedImages - 1
          ? 'gallery__image gallery__image--btn'
          : 'gallery__image'
      "
      @click="index = imageIndex"
    >
      <slot v-if="imageIndex == countDisplayedImages - 1">
        <span class="gallery__image-number">+{{ restImagesCount }} </span>
        <span class="gallery__image-text"
          >More <span class="gallery__image-subtext">Photos</span>
        </span>
      </slot>
    </div>
  </section>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
  components: {
    VueGallery,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
    countDisplayedImages: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      index: null,
    }
  },
  computed: {
    restImagesCount() {
      return this.images.length - this.countDisplayedImages
    },

    displayedImages() {
      return this.images.slice(0, this.countDisplayedImages)
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
  grid-gap: 19px 18px;
  max-width: 648px;
  margin-top: 1px;
  &__image {
    min-width: 100%;
    min-height: 260px;
    @include background-position;
    border-radius: 8px;
    cursor: pointer;
    &-number {
      font-weight: 700;
      font-size: 48px;
    }
    &-text {
      @include flexbox($direction: column, $gap: 0);
      align-items: start;
      font-weight: 600;
      font-size: 14px;
    }
    &-subtext {
      font-weight: 700;
      font-size: 18px;
    }
    &--btn {
      @include flexbox($align-items: center, $justify-content: center, $gap: 15px);
      letter-spacing: -0.2px;
      padding-right: 25px;
    }
  }
}

@media (max-width: 768px) {
  .gallery {
    min-width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    &__image {
      min-width: auto;
      max-width: auto;
      min-height: 120px;
      &-number {
        font-size: 35px;
      }
      &--btn {
        flex-direction: column;
        gap: 0;
      }
    }
  }
}
</style>
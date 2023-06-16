<template>
  <section class="gallery" v-cloak>
    <div class="gallery__images">
      <VueGallery :images="images" :index="index" @close="index = null"></VueGallery>
      <div
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
        :class="
          imageIndex == countDisplayedImages - 1
            ? 'gallery__image gallery__image--btn'
            : 'gallery__image'
        "
      >
        <slot v-if="imageIndex == countDisplayedImages - 1">
          <span class="gallery__image-number">+{{ restImagesCount }} </span>
          <span class="gallery__image-text"
            >More <span class="gallery__image-subtext">Photos</span>
          </span>
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
import VueGallery from 'vue-gallery'
import AppAvatar from './AppAvatar.vue'

export default {
  components: {
    AppAvatar,
    VueGallery
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    countDisplayedImages: Number
  },
  data() {
    return {
      index: null
    }
  },
  computed: {
    restImagesCount() {
      return this.images.length - this.countDisplayedImages
    },
    formattedPrice() {
      return this.price.map((price) => price.replace('$', ' $ ')).join('  -  ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/background-position';
@import '@/assets/scss/mixins/flexbox-general';
@import '@/assets/scss/mixins/flexbox-center';
@import '@/assets/scss/mixins/flexbox-direction';

$image-item-width: 315px;
$image-item-height: 260px;
$images-gallery-width: 648px;
$images-gallery-height: 540px;
$gallery-bg-color: rgba(194, 198, 204, 1);

.gallery {
  @include flexbox-general($gap: 17px);
  justify-content: center;
  &__images {
    @include flexbox-general($gap: 19px 18px);
    max-width: $images-gallery-width;
    max-height: $images-gallery-height;
    margin-top: 1px;
    overflow-y: hidden;
  }
  &__image {
    min-width: $image-item-width;
    min-height: $image-item-height;
    background-color: $gallery-bg-color;
    @include background-position;
    border-radius: 8px;
    cursor: pointer;
    &-number {
      font-weight: 700;
      font-size: 48px;
    }
    &-text {
      @include flexbox-direction($direction: column, $gap: 0);
      font-weight: 600;
      font-size: 14px;
      align-items: start;
    }
    &-subtext {
      font-weight: 700;
      font-size: 18px;
    }
    &--btn {
      @include flexbox-center($gap: 15px);
      letter-spacing: -0.2px;
      padding-right: 25px;
    }
  }
}
</style>

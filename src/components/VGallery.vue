<template>
  <section class="gallery">
    <div class="gallery__main" :style="{ 'background-image': `url(${galleryMainImage})` }">
      <AppAvatar :avatarUrl="avatarUrl" avatarSize="76px" />
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
      countDisplayedImages: 4,
      index: null
    }
  },
  computed: {
    restImagesCount() {
      return this.galleryImages.length - this.countDisplayedImages
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
  &__main {
    @include flexbox-general($gap: 22px, $flexWrap: nowrap);
    align-items: end;
    flex: 1 1 0;
    min-width: 400px;
    min-height: 350px;
    padding: 55px 65px;
    background-color: $gallery-bg-color;
    border-radius: 16px;
    background-image: v-bind(galleryMainImage);
    @include background-position;
  }
  &__text {
    @include flexbox-direction($direction: column, $gap: 4px);
    font-weight: 500;
    &-item {
      font-size: 12px;
    }
    &-author {
      font-weight: 700;
      font-size: 18px;
    }
    &-price {
      margin-bottom: 4px;
    }
  }
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
      align-items: start;
    }
    &-subtext {
      font-weight: 700;
      font-size: 18px;
    }
    &--btn {
      @include flexbox-center($gap: 10px);
    }
  }
}
</style>

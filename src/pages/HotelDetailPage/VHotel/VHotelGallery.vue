<template>
  <section class="hotel-images">
    <div class="hotel-images__main" :style="{ 'background-image': `url(${mainImage})` }">
      <VCardHostInfo :avatar="avatar" :name="name" :price="price" />
    </div>
    <VGallery :images="images" :countDisplayedImages="4" />
  </section>
</template>

<script>
import VCardHostInfo from '@/components/VCardHostInfo.vue'
import VGallery from '@/components/VGallery.vue'

export default {
  components: {
    VCardHostInfo,
    VGallery
  },
  props: {
    avatar: String,
    name: String,
    price: Array,
    mainImage: String,
    images: Array
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

.hotel-images {
  @include flexbox-general($gap: 17px);
  justify-content: center;
  &__main {
    @include flexbox-general($gap: 22px, $wrap: nowrap);
    align-items: end;
    flex: 1 1 0;
    min-width: 300px;
    max-width: 669px;
    min-height: 350px;
    padding: 55px 65px;
    background-color: $gallery-bg-color;
    border-radius: 16px;
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
}

@media (max-width: 480px) {
  .hotel-images {
    &__main {
      min-width: 100%;
      padding: 20px;
    }
  }
}
</style>

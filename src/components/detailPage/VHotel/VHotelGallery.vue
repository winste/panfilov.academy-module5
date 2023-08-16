<template>
  <section class="hotel-images">
    <div
      class="hotel-images__main"
      :style="{ 'background-image': `url(${mainImage})` }"
    >
      <VCardHostInfo :avatar="avatar" :name="name" :price="price" />
    </div>
    <VGallery :images="images" />
  </section>
</template>

<script>
import VCardHostInfo from '@/components/general/VCardHostInfo.vue'
import VGallery from '@/components/general/VGallery.vue'

export default {
  components: {
    VCardHostInfo,
    VGallery,
  },
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Array,
      required: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.hotel-images {
  @include flexbox($justify-content: center, $gap: 17px);
  &__main {
    @include flexbox($align-items: end, $gap: 22px, $wrap: nowrap);
    flex: 1 1 0;
    min-width: 300px;
    max-width: 669px;
    min-height: 350px;
    padding: 55px 65px;
    background-color: #c2c6cc;
    border-radius: 16px;
    @include background-position;
  }
  &__text {
    @include flexbox($direction: column, $gap: 4px);
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

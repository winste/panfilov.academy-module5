<template>
  <span class="amenity">
    <img :src="amenity.icon" alt="Icon amenities" class="amenity__image" />
    <p class="amenity__name" v-text="amenity.name"></p>
  </span>
</template>

<script>
export default {
  props: {
    amenity: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-general';

$icon-size: 30px;
.amenity {
  @include flexbox-general($gap: 17px);
  align-items: center;
  color: $main-font-color;
  &__image {
    max-width: $icon-size;
    max-height: $icon-size;
    opacity: 0.65;
  }
}
</style>

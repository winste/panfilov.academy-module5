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
.amenity {
  @include flexbox($align-items: center, $gap: 17px);
  color: $main-font-color;
  &__image {
    max-width: 30px;
    max-height: 30px;
    opacity: 0.65;
  }
}
</style>
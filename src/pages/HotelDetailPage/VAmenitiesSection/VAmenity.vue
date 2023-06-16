<template>
  <span v-for="amenity in amenitiesList" :key="amenity.id" class="amenity">
    <img :src="amenity.icon" alt="Icon amenities" class="amenity__image" />
    <p>{{ amenity.name }}</p>
  </span>
</template>

<script>
export default {
  props: {
    amenitiesList: Array
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

$icon-size: 30px;
.amenity {
  display: flex;
  align-items: center;
  gap: 17px;
  color: $main-font-color;
  &__image {
    max-width: $icon-size;
    max-height: $icon-size;
    opacity: 0.65;
  }
}
</style>

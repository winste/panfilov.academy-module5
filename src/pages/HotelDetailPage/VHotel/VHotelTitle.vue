<template>
  <div class="hotel-info">
    <h3 class="hotel-info__title" v-text="name"></h3>
    <p class="hotel-info__address" v-text="address"></p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.hotel-info {
  &__title {
    margin-bottom: 6px;
  }
  &__address {
    color: $secondary-font-color;
  }
}
</style>
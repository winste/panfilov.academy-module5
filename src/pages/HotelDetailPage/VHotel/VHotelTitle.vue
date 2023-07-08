<template>
  <div class="hotel-info">
    <h3 class="hotel-info__title" v-text="hotelName"></h3>
    <p class="hotel-info__address" v-text="hotelAddress"></p>
  </div>
</template>

<script>
export default {
  props: {
    hotelName: { type: String, required: true },
    hotelAddress: { type: String, required: true },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
.hotel-info {
  &__title {
    margin-bottom: 6px;
  }
  &__address {
    color: $secondary-font-color;
  }
}
</style>











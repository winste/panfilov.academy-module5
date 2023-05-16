<template>
  <div class="hotel-info">
    <h3 v-text="hotelName" class="hotel-info__title"></h3>
    <p v-text="hotelAddress" class="hotel-info__address"></p>
  </div>
</template>

<script>
export default {
  props: {
    hotelName: String,
    hotelAddress: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
.hotel-info {
  &__title {
    margin-bottom: 10px;
  }
  &__address {
    color: $secondary-font-color;
  }
}
</style>

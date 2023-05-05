<template>
  <div class="hotel-info">
    <h3 class="hotel-info__title">
      {{ hotelName }}
    </h3>
    <p class="hotel-info__address">
      {{ hotelAddress }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    hotelName: String,
    hotelAddress: String,
  },
}
</script>

<style lang="scss" scoped>
.hotel-info {
  &__title {
    margin-bottom: 10px;
  }
  &__address {
    color: rgba(154, 154, 154, 1);
  }
}
</style>

<template>
  <button type="submit" class="button-reserve">Reserve Now</button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/button-hover';

$button-width: 324px;
$button-height: 60px;

.button-reserve {
  font-weight: 700;
  font-size: 15px;
  color: $button-font-color;
  min-width: $button-width;
  min-height: $button-height;
  background: $main-font-color;
  border-radius: 30px;
  @include button-hover($animation: true);
}
</style>

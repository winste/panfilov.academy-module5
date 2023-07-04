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
  padding-left: 13px;
  letter-spacing: -0.1px;
  background: $main-font-color;
  border-radius: 30px;
  @include button-hover;
}

@media (max-width: 768px) {
  .button-reserve {
    min-width: 100%;
  }
}
</style>

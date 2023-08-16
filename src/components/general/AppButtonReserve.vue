<template>
  <button type="submit" class="button-reserve">Reserve Now</button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.button-reserve {
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  min-width: 324px;
  min-height: 60px;
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

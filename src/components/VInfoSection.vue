<template>
  <section class="info">
    <h2 class="info__title">{{ title }}</h2>
    <slot>Cards</slot>
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins/section-title';
.info {
  &__title {
    @include section-title-style;
  }
}
</style>

<template>
  <div class="description">
    <h4 class="description__title">Apartment Description</h4>
    <div v-html="formattedText" class="description__text"></div>
  </div>
</template>

<script>
export default {
  props: {
    hotelDescription: String
  },
  computed: {
    formattedText() {
      return this.hotelDescription
        .split('.')
        .map((item) => item.replace('\n', `<p> </p>`))
        .join('.')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.description {
  &__title {
    margin-bottom: 15px;
  }
  &__text {
    font-size: 15px;
    line-height: 20px;
    color: $secondary-font-color;
    white-space: pre-wrap;
  }
}
</style>

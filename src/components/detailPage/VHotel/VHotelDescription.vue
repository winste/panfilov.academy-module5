<template>
  <div class="description">
    <h4 class="description__title">Apartment Description</h4>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="description__text" v-html="formattedText"></div>
  </div>
</template>

<script>
export default {
  props: {
    hotelDescription: { type: String, required: true },
  },
  computed: {
    formattedText() {
      return this.hotelDescription
        .split('.')
        .map((item) => item.replace('\n', `<p> </p>`))
        .join('.')
    },
  },
}
</script>

<style lang="scss" scoped>
.description {
  &__title {
    margin-bottom: 15px;
    letter-spacing: -0.2px;
  }
  &__text {
    font-size: 15px;
    line-height: 20px;
    color: $secondary-font-color;
    white-space: pre-wrap;
  }
}
</style>

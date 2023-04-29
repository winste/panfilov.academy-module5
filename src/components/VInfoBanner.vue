<template>
  <section class="infoBanner" :style="urlBackground">
    <h2 class="infoBanner__title">
      {{ title }}
    </h2>
    <p class="infoBanner__description">
      {{ description }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    image: String
  },
  computed: {
    urlBackground() {
      return `background-image: url("${this.image}");`
    }
  }
}
</script>

<style lang="scss" scoped>
.infoBanner {
  min-height: 395px;
  width: auto;
  padding: 70px 54px;
  background-size: 100%;
  background-position: center;
  border-radius: 12px;
  &__title {
    font-size: 36px;
    line-height: 52px;
    max-width: 339px;
    margin-bottom: 22px;
  }
  &__description {
    max-width: 400px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>

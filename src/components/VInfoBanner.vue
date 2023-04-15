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
  height: 395px;
  width: auto;
  padding: 70px 55px;
  background-size: 100%;
  object-fit: cover;
  border-radius: 12px;
  &__title {
    font-size: 36px;
    max-width: 339px;
  }
}
</style>

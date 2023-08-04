<template>
  <section class="info-banner" :style="{ 'background-image': `url(${url})` }">
    <h2 class="info-banner__title" v-text="title"></h2>
    <p class="info-banner__description" v-text="text"></p>
  </section>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.info-banner {
  min-height: 395px;
  min-width: 100%;
  padding: 70px 54px;
  @include background-position;
  border-radius: 12px;
  background-color: #eff0f2;
  &__title {
    line-height: 52px;
    max-width: 339px;
    margin-bottom: 22px;
  }
  &__description {
    max-width: 400px;
    @include text-hide;
  }
}

@media (max-width: 480px) {
  .info-banner {
    &__title {
      line-height: normal;
    }
  }
}
</style>
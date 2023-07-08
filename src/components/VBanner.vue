<template>
  <section class="info-banner" :style="{ 'background-image': `url(${url})` }">
    <h2 class="info-banner__title" v-text="title"></h2>
    <p class="info-banner__description" v-text="text"></p>
  </section>
</template>

<script>
export default {
  props: {
    url: { type: Number, required: true },
    title: { type: Number, required: true },
    text: { type: Number, required: true },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/background-position';
@import '@/assets/scss/mixins/text-hide';
@import '@/assets/scss/const';

$banner-height: 395px;
$banner-width: 100%;
$title-width: 339px;
$description-width: 400px;

.info-banner {
  min-height: $banner-height;
  min-width: $banner-width;
  padding: 70px 54px;
  @include background-position;
  border-radius: 12px;
  &__title {
    line-height: 52px;
    max-width: $title-width;
    margin-bottom: 22px;
  }
  &__description {
    max-width: $description-width;
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
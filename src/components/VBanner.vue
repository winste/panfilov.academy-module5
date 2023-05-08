<template>
  <section class="info-banner" :style="{ 'background-image': `url(${bannerImage})` }">
    <h2 v-text="bannerTitle" class="info-banner__title"></h2>
    <p v-text="bannerDescription" class="info-banner__description"></p>
  </section>
</template>

<script>
export default {
  props: {
    bannerImage: String,
    bannerTitle: String,
    bannerDescription: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/background-position';
@import '@/assets/scss/mixins/text-hide';
@import '@/assets/scss/const';

$banner-height: 395px;
$banner-width: 100%;
$title-width: 339px;
$description-title: 400px;

.info-banner {
  min-height: $banner-height;
  min-width: $banner-width;
  padding: 70px 54px;
  @include background-position;
  border-radius: 12px;
  &__title {
    font-size: $h2-font-size;
    line-height: 52px;
    max-width: $title-width;
    margin-bottom: 22px;
  }
  &__description {
    max-width: $description-title;
    @include text-hide;
  }
}
</style>

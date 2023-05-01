<template>
  <section class="main-banner" :style="{ 'background-image': `url(${image})` }">
    <div class="main-banner__search">
      <VSearchBar />
    </div>
  </section>
</template>

<script>
import VSearchBar from './VSearchBar.vue'
export default {
  components: {
    VSearchBar
  },
  props: {
    image: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/background-position';
.main-banner {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  min-height: $banner-main-height;
  background-color: $main-decor-color;
  @include background-position;
  &__search {
    padding-bottom: 77px;
  }
}
</style>

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
    VSearchBar,
  },
  props: {
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-direction';
@import '@/assets/scss/mixins/background-position';

$banner-main-height: 567px;

.main-banner {
  @include flexbox-direction($direction: column, $gap: 0, $flexWrap: nowrap);
  justify-content: end;
  align-items: center;
  min-height: $banner-main-height;
  background-color: $main-decor-color;
  @include background-position;
  &__search {
    padding-bottom: 77px;
  }
}

@media (max-width: 768px) {
  .main-banner {
    &__search {
      margin: 30px;
    }
  }
}

@media (max-width: 320px) {
  .main-banner {
    &__search {
      margin: 10px;
    }
  }
}
</style>











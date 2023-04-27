<template>
  <section class="main-banner" :style="{ 'background-image': `url(${image})` }">
    <div class="main-banner__search">
      <VMainBannerSearchBar />
    </div>
  </section>
</template>

<script>
import VMainBannerSearchBar from '../components/VMainBannerSearchBar.vue'
export default {
  components: {
    VMainBannerSearchBar
  },
  props: {
    image: String
  }
}
</script>

<style lang="scss" scoped>
$bgcolor: rgba(239, 240, 242, 1);

.main-banner {
  height: 567px;
  background-color: $bgcolor;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-size: 100%;
  background-position: center;
  &__search {
    padding-bottom: 77px;
  }
}
</style>

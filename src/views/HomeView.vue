<template>
  <main class="main" v-if="bannersImages">
    <VMainBanner :image="bannersImages.main.image" class="main__banner-main" />
    <div class="container-wrapper">
      <VLatestSection class="main__latest" />
      <VInfoBanner
        :title="bannersImages.second.title"
        :description="bannersImages.second.description"
        :image="bannersImages.second.image"
        class="main__banner-hosting"
      />
      <VFeaturedSection class="main__featured" />
      <VInfoBanner
        :title="bannersImages.last.title"
        :description="bannersImages.last.description"
        :image="bannersImages.last.image"
        class="main__banner-browse"
      />
    </div>
  </main>
</template>

<script>
import { api } from '../api/api'
import VMainBanner from '../components/VMainBanner.vue'
import VLatestSection from '../components/VLatestSection.vue'
import VInfoBanner from '../components/VInfoBanner.vue'
import VFeaturedSection from '../components/VFeaturedSection.vue'

export default {
  components: {
    VMainBanner,
    VLatestSection,
    VInfoBanner,
    VFeaturedSection
  },
  data() {
    return {
      bannersImages: null
    }
  },
  async created() {
    await api.fetchData('/banners').then((response) => (this.bannersImages = response.data))
  }
}
</script>

<style lang="scss" scoped>
.main {
  &__banner {
    &-hosting {
      margin-bottom: 25px;
    }
    &-browse {
      margin-bottom: 57px;
    }
  }
  &__latest {
    padding-top: 88px;
    margin-bottom: 46px;
  }
  &__featured {
    margin-bottom: 63px;
  }
}
</style>

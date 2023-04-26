<template>
  <main class="main" v-if="bannersImages">
    <VMainBanner :image="bannersImages.main.image" class="main__banner-main">
      <VSearchBar />
    </VMainBanner>

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
import VMainBanner from '@/components/VMainBanner.vue'
import VLatestSection from '@/components/VLatestSection.vue'
import VInfoBanner from '../components/VInfoBanner.vue'
import VSearchBar from '../components/VSearchBar.vue'
import VFeaturedSection from '../components/VFeaturedSection.vue'

export default {
  components: {
    VMainBanner,
    VLatestSection,
    VInfoBanner,
    VSearchBar,
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
    &-main {
      margin-bottom: 57px;
    }
    &-hosting {
      margin-bottom: 25px;
    }
    &-browse {
      margin-bottom: 57px;
    }
  }
  &__latest {
    margin-bottom: 46px;
  }
  &__featured {
    margin-bottom: 63px;
  }
}
// .wrapper__banner {
//
// }
// .wrapper__latest {
//   margin-top: 88px;
//   margin-bottom: 46px;
// }
// .wrapper__featured {
//   margin-top: 20px;
//   margin-bottom: 36px;
// }
</style>

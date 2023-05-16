<template>
  <main v-if="bannersImages" class="main">
    <VMainBanner :image="bannersImages.main.image" class="main__banner-main" />
    <div class="container-wrapper">
      <VLatestSection class="main__latest" />
      <VBanner
        :bannerImage="bannersImages.second.image"
        :bannerTitle="bannersImages.second.title"
        :bannerDescription="bannersImages.second.description"
        class="main__banner-hosting"
      />
      <VFeaturedSection class="main__featured" />
      <VBanner
        :bannerImage="bannersImages.last.image"
        :bannerTitle="bannersImages.last.title"
        :bannerDescription="bannersImages.last.description"
        class="main__banner-browse"
      />
    </div>
  </main>
</template>

<script>
import { api } from '../api/api'
import VBanner from '@/components/VBanner.vue'
import VMainBanner from '@/pages/HomePage/VMainBanner/VMainBanner.vue'
import VLatestSection from '@/pages/HomePage/VLatestSection/VLatestSection.vue'
import VFeaturedSection from '@/pages/HomePage/VFeaturedSection/VFeaturedSection.vue'

export default {
  components: {
    VMainBanner,
    VLatestSection,
    VBanner,
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
      margin-left: 15px;
      min-width: 100%;
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

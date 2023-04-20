<template>
  <VMainBanner v-if="bannersImages" :image="bannersImages.main.image">
    <VSearchBar />
  </VMainBanner>

  <div class="wrapper">
    <div class="wrapper__latest">
      <VLatestSection />
    </div>

    <VInfoBanner
      v-if="bannersImages"
      :title="bannersImages.second.title"
      :description="bannersImages.second.description"
      :image="bannersImages.second.image"
    />

    <div class="wrapper__featured">
      <VFeaturedSection />
    </div>

    <div class="wrapper__banner">
      <VInfoBanner
        v-if="bannersImages"
        :title="bannersImages.last.title"
        :description="bannersImages.last.description"
        :image="bannersImages.last.image"
      />
    </div>
  </div>
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

<style lang="scss">
.wrapper__banner {
  margin-bottom: 57px;
}
.wrapper__latest {
  margin-top: 88px;
  margin-bottom: 46px;
}
.wrapper__featured {
  margin-top: 20px;
  margin-bottom: 36px;
}
</style>

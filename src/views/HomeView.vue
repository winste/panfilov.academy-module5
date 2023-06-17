<template>
  <main v-if="banners" class="main">
    <AppMetaTags :metaInfo="metaInfo" />
    <VMainBanner :image="banners.main.image" class="main__banner-main" />
    <div class="container-wrapper">
      <VLatestSection class="main__latest" />
      <VBanner
        :url="banners.second.image"
        :title="banners.second.title"
        :text="banners.second.description"
        class="main__banner-hosting"
      />
      <VFeaturedSection class="main__featured" />
      <VBanner
        :url="banners.last.image"
        :title="banners.last.title"
        :text="banners.last.description"
        class="main__banner-browse"
      />
    </div>
  </main>
</template>

<script>
import { api } from '@/api/api'
import VBanner from '@/components/VBanner.vue'
import VMainBanner from '@/pages/HomePage/VMainBanner/VMainBanner.vue'
import VLatestSection from '@/pages/HomePage/VLatestSection/VLatestSection.vue'
import VFeaturedSection from '@/pages/HomePage/VFeaturedSection/VFeaturedSection.vue'
import AppMetaTags from '../components/AppMetaTags.vue'

export default {
  components: {
    VMainBanner,
    VLatestSection,
    VBanner,
    VFeaturedSection,
    AppMetaTags
  },
  data() {
    return {
      banners: null,
      metaInfo: {
        title: 'Hotel Prototype Booking',
        meta: [
          {
            name: 'description',
            content: 'My page description'
          },
          {
            name: 'keywords',
            content: 'vue, meta, tutorial'
          }
        ]
      }
    }
  },
  async created() {
    await api.fetchData('/banners').then((response) => (this.banners = response.data))
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

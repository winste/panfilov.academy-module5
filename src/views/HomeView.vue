<template>
  <main class="home">
    <div v-if="banners" class="home__content">
      <AppMetaTags :meta-info="metaInfo" />
      <VMainBanner :image="banners.main.image" class="home__banner-main" />
      <div class="container-wrapper">
        <VLatestSection class="home__latest" />
        <VBanner
          :url="banners.second.image"
          :title="banners.second.title"
          :text="banners.second.description"
          class="home__banner-hosting"
        />
        <VFeaturedSection class="home__featured" />
        <VBanner
          :url="banners.last.image"
          :title="banners.last.title"
          :text="banners.last.description"
          class="home__banner-browse"
        />
      </div>
      <AppErrorMessage v-if="error" :msg="error" />
    </div>
  </main>
</template>

<script>
import { api } from '@/api/api'
import VBanner from '@/components/VBanner.vue'
import VMainBanner from '@/pages/HomePage/VMainBanner/VMainBanner.vue'
import VLatestSection from '@/pages/HomePage/VLatestSection/VLatestSection.vue'
import VFeaturedSection from '@/pages/HomePage/VFeaturedSection/VFeaturedSection.vue'
import AppMetaTags from '@/components/AppMetaTags.vue'
import metaTags from '@/helpers/metaTags'
import AppErrorMessage from '@/components/AppErrorMessage.vue'

export default {
  components: {
    VMainBanner,
    VLatestSection,
    VBanner,
    VFeaturedSection,
    AppMetaTags,
    AppErrorMessage,
  },
  data() {
    return {
      banners: null,
      error: null,
      metaInfo: metaTags(
        'Hotels Booking',
        'The best service for booking and reserve hotels from all over the world',
        'fast booking, hotels all over the world, large selection of hotels, convenient hotel booking, hotels in different countries'
      ),
    }
  },
  async created() {
    await api
      .fetchData('/banners')
      .then((response) => (this.banners = response.data))
      .catch((error) => (this.error = error.message))
  },
}
</script>

<style lang="scss" scoped>
.home {
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

@media (max-width: 480px) {
  .home {
    &__banner {
      &-browse {
        margin-left: 0;
      }
    }
  }
}
</style>
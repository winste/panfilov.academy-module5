<template>
  <main class="not-found container-wrapper">
    <AppMetaTags :metaInfo="metaInfo" />
    <h4>
      Page not found.
      <router-link to="/">Home Page</router-link>
    </h4>
  </main>
</template>

<script>
import AppMetaTags from '@/components/AppMetaTags.vue'
import metaTags from '@/helpers/metaTags'

export default {
  components: {
    AppMetaTags
  },
  data() {
    return {
      metaInfo: metaTags(
        'Page not found',
        'Page not found in the service for convenient and fast hotel booking around the world',
        'hotels all over the world, large selection of hotels, convenient hotel booking, hotels in different countries, booking hotels, search hotels'
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  padding-top: 90px;
  padding-bottom: 90px;
}
</style>

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
import AppMetaTags from '../components/AppMetaTags.vue'

export default {
  components: {
    AppMetaTags
  },
  data() {
    return {
      metaInfo: {
        title: 'Page not found',
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
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  padding-top: 90px;
  padding-bottom: 90px;
}
</style>

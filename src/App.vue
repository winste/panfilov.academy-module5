<template>
  <div class="container">
    <TheHeader />
    <RouterView />
    <div v-if="checkRoute">
      <TheNewsLetter />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheNewsLetter from '@/components/TheNewsLetter.vue'

export default {
  components: {
    TheHeader,
    TheNewsLetter,
    TheFooter
  },

  data() {
    return {
      route: null
    }
  },

  computed: {
    getRoute() {
      return (this.route = this.$route.name)
    },

    checkRoute() {
      return this.getRoute != 'search'
    }
  }
}
</script>

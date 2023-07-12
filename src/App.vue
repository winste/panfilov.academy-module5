<template>
  <div class="container">
    <TheHeader />
    <AppModal />
    <RouterView />
    <div v-if="'search'.indexOf($route.name)">
      <TheNewsLetter />
      <TheFooter />
    </div>
  </div>
</template> 

<script>
import TheFooter from '@/layout/TheFooter/TheFooter.vue'
import TheHeader from '@/layout/TheHeader/TheHeader.vue'
import TheNewsLetter from '@/layout/TheNewsLetter.vue'
import AppModal from './components/AppModal.vue'

export default {
  components: {
    TheHeader,
    TheNewsLetter,
    TheFooter,
    AppModal,
  },

  created() {
    this.$router.beforeEach((to, from, next) => {
      setTimeout(next, 500)
    })
  },
}
</script>

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
import TheFooter from '@/components/layout/TheFooter/TheFooter.vue'
import TheHeader from '@/components/layout/TheHeader/TheHeader.vue'
import TheNewsLetter from '@/components/layout/TheNewsLetter.vue'
import AppModal from '@/components/general/AppModal.vue'

export default {
  components: {
    TheHeader,
    TheNewsLetter,
    TheFooter,
    AppModal,
  },
}
</script>
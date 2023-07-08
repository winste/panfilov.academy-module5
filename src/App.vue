<template>
  <div class="container">
    <TheHeader />
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

export default {
  components: {
    TheHeader,
    TheNewsLetter,
    TheFooter,
  },
}
</script>

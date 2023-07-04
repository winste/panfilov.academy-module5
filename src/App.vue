<template>
  <div class="container">
    <TheHeader />
    <RouterView />
    <div v-if="['search'].indexOf($route.name)">
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
  }
}
</script>

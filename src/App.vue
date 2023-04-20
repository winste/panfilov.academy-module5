<template>
  <div class="container">
    <VHeader />
    <RouterView />
    <VNewsLetter />
    <VFooter />
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue'
import VNewsLetter from './components/VNewsLetter.vue'
import VFooter from './components/VFooter.vue'

export default {
  components: {
    VHeader,
    VNewsLetter,
    VFooter
  }
}
</script>

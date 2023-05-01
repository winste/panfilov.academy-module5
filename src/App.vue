<template>
  <div class="container">
    <VHeader />
    <RouterView />
    <VNewsLetter />
    <VFooter />
  </div>
</template>

<script>
import VFooter from './components/VFooter/VFooter.vue'
import VHeader from './components/VHeader/VHeader.vue'
import VNewsLetter from './components/VNewsLetter.vue'

export default {
  components: {
    VHeader,
    VNewsLetter,
    VFooter
  }
}
</script>

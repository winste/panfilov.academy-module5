<template>
  <div class="container">
    <VHeader />
  </div>
  <RouterView />
</template>

<script>
import VHeader from './components/VHeader.vue'

export default {
  components: {
    VHeader
  }
}
</script>

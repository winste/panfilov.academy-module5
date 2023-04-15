<template>
  <header class="header">
    <a href="/">
      <VIcon :nameIcon="icon" width="108" height="43" />
    </a>
    <VNavigation />
  </header>
</template>

<script>
import VIcon from './VIcon.vue'
import Logo from '@/assets/images/Logo.svg'
import VNavigation from './VNavigation.vue'

export default {
  components: {
    VIcon,
    VNavigation
  },
  data() {
    return {
      icon: Logo
    }
  }
}
</script>

<style lang="scss" scoped>
$colorBanner: rgba(239, 240, 242, 1);

.header {
  display: flex;
  align-items: center;
  padding: 27.5px 80px 20px 83px;
  background-color: $colorBanner;
}
</style>

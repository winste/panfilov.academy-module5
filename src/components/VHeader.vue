<template>
  <header class="header">
    <a href="/">
      <VIcon :iconName="iconLogo" width="104" height="30" />
    </a>
    <VNavigation class="header__navigation" />
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
      iconLogo: Logo
    }
  }
}
</script>

<style lang="scss" scoped>
$colorBanner: rgba(239, 240, 242, 1);

.header {
  display: flex;
  padding: 27px 80px 20px 82px;
  background-color: $colorBanner;
  &__navigation {
    padding-top: 5px;
  }
}
</style>

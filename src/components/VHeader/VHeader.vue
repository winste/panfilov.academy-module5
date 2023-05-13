<template>
  <header class="header">
    <router-link to="/"
      ><VIcon :iconName="logoIcon" :width="104" :height="30" class="logo" />
    </router-link>
    <VNavigation class="header__navigation" />
  </header>
</template>

<script>
import VIcon from '@/components/VIcon.vue'
import Logo from '@/assets/images/Logo.svg'
import VNavigation from './VNavigation.vue'

export default {
  components: {
    VIcon,
    VNavigation
  },
  data() {
    return {
      logoIcon: Logo
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.header {
  display: flex;
  padding: 27px 80px 20px 82px;
  background-color: $main-decor-color;
  border-radius: 20px 20px 0 0;
  &__navigation {
    margin-left: 135px;
    margin-top: 5px;
  }
}
</style>

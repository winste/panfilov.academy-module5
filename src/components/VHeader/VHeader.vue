<template>
  <header class="header">
    <VLogo />
    <VNavigation class="header__navigation" />
  </header>
</template>

<script>
import VNavigation from './VNavigation.vue'
import VLogo from '../VLogo.vue'

export default {
  components: {
    VLogo,
    VNavigation
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

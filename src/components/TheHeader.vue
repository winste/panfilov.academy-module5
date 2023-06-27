<template>
  <header class="header">
    <router-link to="/"
      ><AppIcon :name="logoIcon" :width="104" :height="30" class="logo" />
    </router-link>
    <TheHeaderNavigation class="header__navigation" />
  </header>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'
import Logo from '@/assets/images/Logo.svg'
import TheHeaderNavigation from './TheHeaderNavigation.vue'

export default {
  components: {
    AppIcon,
    TheHeaderNavigation
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
  &__navigation {
    margin-left: 135px;
    margin-top: 5px;
  }
}

@media (max-width: 1024px) {
  .header {
    &__navigation {
      margin-left: 60px;
    }
  }
}
</style>

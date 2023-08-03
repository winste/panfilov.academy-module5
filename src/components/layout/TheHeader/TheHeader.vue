<template>
  <header class="header container-wrapper">
    <router-link to="/"
      ><AppIcon :name="logoIcon" :width="104" :height="30" class="header__logo" />
    </router-link>
    <TheHeaderNavigation class="header__navigation" />
    <TheHeaderBurger class="header__burger" />
  </header>
</template>

<script>
import Logo from '@/assets/images/Logo.svg'
import AppIcon from '@/components/general/AppIcon.vue'
import TheHeaderNavigation from './TheHeaderNavigation.vue'
import TheHeaderBurger from './TheHeaderBurger.vue'

export default {
  components: {
    AppIcon,
    TheHeaderNavigation,
    TheHeaderBurger,
  },
  data() {
    return {
      logoIcon: Logo,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding-top: 27px;
  padding-bottom: 20px;
  background-color: $main-decor-color;
  &__logo {
    margin-left: 2px;
  }
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

@media (max-width: 992px) {
  .header {
    justify-content: space-between;
    &__navigation {
      margin: 0;
    }
  }
}
</style>
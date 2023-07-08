<template>
  <header class="header container-wrapper">
    <router-link to="/"
      ><AppIcon :name="logoIcon" :width="104" :height="30" class="header__logo" />
    </router-link>
    <TheHeaderNavigation class="header__navigation" />

    <div class="burger burger__item" @click="showNavigation">
      <span class="burger__line burger__item burger__line"></span>
      <span class="burger__line burger__item burger__line2"></span>
      <span class="burger__line burger__item burger__line3"></span>
    </div>
  </header>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'
import Logo from '@/assets/images/Logo.svg'
import TheHeaderNavigation from './TheHeaderNavigation.vue'

export default {
  components: {
    AppIcon,
    TheHeaderNavigation,
  },
  data() {
    return {
      logoIcon: Logo,
    }
  },

  methods: {
    showNavigation(e) {
      if (e.target.className.includes('burger__item'))
        document.querySelector('.navbar').classList.toggle('open')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

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

.burger {
  display: none;
}

@media (max-width: 1024px) {
  .header {
    &__navigation {
      margin-left: 60px;
    }
  }
}

@media (max-width: 920px) {
  .header {
    justify-content: space-between;
    &__navigation {
      margin: 0;
    }
  }

  .burger {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    width: 40px;
    &__line {
      display: inline-block;
      width: 100%;
      height: 5px;
      background-color: $secondary-font-color;
      border-radius: 20px;
    }
  }
}
</style>

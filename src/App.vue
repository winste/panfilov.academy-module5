<template>
  <div class="wrapper">
    <header class="header">
      <img src="./assets/images/Logo.svg" alt="logo" />
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__link">
            <RouterLink to="/" class="nav__link"> Find a Property </RouterLink>
          </li>
          <li class="nav__link">
            <RouterLink to="/" class="nav__link"> Share Stories </RouterLink>
          </li>
          <li class="nav__link">
            <RouterLink to="/" class="nav__link"> Rental Guides </RouterLink>
          </li>
          <li class="nav__link">
            <RouterLink to="/" class="nav__link"> Download Mobile App </RouterLink>
          </li>
        </ul>
      </nav>
    </header>
    <VHeadBanner />
  </div>
  <div class="subwrapper">
    <VLatestBlock />
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import VHeadBanner from "./components/VHeadBanner.vue";
import VLatestBlock from "./components/VLatestBlock.vue";
</script>

<style lang="scss" scoped>
$colorBanner: rgba(239, 240, 242, 1);

.wrapper {
  max-width: 1396px;
  margin: 0 auto;
  padding: 0 15px;
  font-weight: normal;
}
.subwrapper {
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 80px;
  font-weight: normal;
}

.header {
  display: flex;
  align-items: center;
  padding: 27.5px 80px 20px 83px;
  background-color: $colorBanner;
}

.nav {
  margin-left: 135px;
  &__list {
    display: flex;
    justify-content: space-around;
    gap: 32.5px;
  }
  &__link {
    font-weight: 600;
    // &.router-link-active {
    // }
    &:hover {
      :hover {
        opacity: 0.5;
      }
    }
  }
}
</style>

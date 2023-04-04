<template>
<div class="wrapper">
  <header class="header">
      <img src="./assets/images/logo.svg" alt="logo">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__link"> <RouterLink to="/" class="nav__link">Find a Property</RouterLink> </li>
            <li class="nav__link"> <RouterLink to="/" class="nav__link">Share Stories</RouterLink> </li>
            <li class="nav__link"> <RouterLink to="/" class="nav__link">Rental Guides</RouterLink> </li>
            <li class="nav__link"> <RouterLink to="/" class="nav__link">Download Mobile App</RouterLink> </li>
          </ul>
        </nav>
     
  </header>
  <VHeadBanner/>
</div>
  <RouterView />
  
 
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import VHeadBanner from './components/VBanners/VHeadBanner.vue'
</script>

<style lang="scss" scoped>
$colorBanner: rgba(239, 240, 242, 1);

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
        opacity: .5;
      }
    }
  }
}
</style>

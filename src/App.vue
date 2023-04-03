<template>
<div class="wrapper">
  <header class="header">
      <div class=logo>
        Logo
      </div>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__link"> <RouterLink to="/" class="nav__link">Find a Property</RouterLink> </li>
            <li class="nav__link"> <RouterLink to="/" class="nav__link">Share Stories</RouterLink> </li>
            <li class="nav__link"> <RouterLink to="/" class="nav__link">Rental Guides</RouterLink> </li>
            <li class="nav__link"> <RouterLink to="/" class="nav__link">Download Mobile App</RouterLink> </li>
          </ul>
        </nav>
     
  </header>
</div>
  <RouterView />
 
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
$colorBanner: rgba(239, 240, 242, 1);

.header {
  display: flex;
  align-items: center;
  padding: 23px 80px 20px 80px;
  background-color: $colorBanner;
}

.logo {
  font-size: 35px;
  font-weight: 800;
  text-transform: uppercase;
}

.nav {
  margin-left: 134px;
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

<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__link">
        <a href="#featured" class="navbar__link">Find a Property</a>
      </li>
      <li class="navbar__item">
        <a href="#footer" class="navbar__link">Share Stories</a>
      </li>
      <li class="navbar__item">
        <a href="#latest" name="latest" class="navbar__link">Rental Guides</a>
      </li>
      <li class="navbar__item">
        <a href="#footer" class="navbar__link">Download Mobile App</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';

.navbar {
  &__list {
    @include flexbox-general($gap: 32.5px);
    justify-content: space-around;
  }
  &__link {
    font-weight: 600;
    &:hover {
      :hover {
        opacity: 0.5;
      }
    }
  }
}
</style>

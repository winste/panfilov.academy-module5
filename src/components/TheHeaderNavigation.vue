<template>
  <nav class="navbar">
    <a href="#featured" class="navbar__link">Find a Property</a>
    <a href="#news-letter" class="navbar__link">Share Stories</a>
    <a href="#latest" name="latest" class="navbar__link">Rental Guides</a>
    <a href="#footer" class="navbar__link">Download Mobile App</a>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';

.navbar {
  @include flexbox-general($gap: 32.5px);
  font-weight: 600;
  &__list {
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

@media (max-width: 1024px) {
  .navbar {
    gap: 20px;
  }
}
</style>

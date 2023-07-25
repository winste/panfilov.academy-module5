<template>
  <nav class="navbar">
    <a href="#featured" class="navbar__link">Find a Property</a>
    <a href="#news-letter" class="navbar__link">Share Stories</a>
    <a href="#latest" name="latest" class="navbar__link">Rental Guides</a>
    <a href="#footer" class="navbar__link">Download Mobile App</a>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  @include flexbox($gap: 32.5px);
  font-weight: 600;
}

@media (max-width: 1024px) {
  .navbar {
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .navbar {
    display: none;
    position: absolute;
    top: 70px;
    right: -100%;
    padding: 70px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 45px;
    z-index: 111;
    background-color: $main-decor-color;
    box-shadow: $box-shadow;
    border-radius: 12px;
    transition: $transition;
    &.open {
      right: 0;
    }
  }
}

@media (max-width: 320px) {
  .navbar {
    min-width: 100%;
  }
}
</style>
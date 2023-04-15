<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__link">
        <a href="#featured" class="nav__link">Find a Property</a>
      </li>
      <li class="nav__item">
        <a href="#footer" class="nav__link">Share Stories</a>
      </li>
      <li class="nav__item">
        <a href="#latest" name="latest" class="nav__link">Rental Guides</a>
      </li>
      <li class="nav__item">
        <a href="#footer" class="nav__link">Download Mobile App</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  margin-left: 135px;
  &__list {
    display: flex;
    justify-content: space-around;
    gap: 32.5px;
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

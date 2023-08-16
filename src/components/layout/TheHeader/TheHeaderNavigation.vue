<template>
  <nav class="navbar" @click.prevent="smoothBehavior">
    <a href="#featured" class="navbar__link">Find a Property</a>
    <a href="#news-letter" class="navbar__link">Share Stories</a>
    <a href="#latest" class="navbar__link">Rental Guides</a>
    <a href="#footer" class="navbar__link">Download Mobile App</a>
  </nav>
</template>

<script>
export default {
  methods: {
    smoothBehavior(e) {
      if (e.target.tagName != 'A') return
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  @include flexbox($gap: 32.5px);
  font-weight: 600;
  z-index: 1;
}

@media (max-width: 1024px) {
  .navbar {
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .navbar {
    position: absolute;
    top: -100%;
    right: 0;
    padding: 70px;
    @include flexbox($direction: column, $gap: 45px, $wrap: nowrap);
    z-index: 11;
    background-color: $main-decor-color;
    box-shadow: 0 10px 10px #e5e5e5;
    border-radius: 12px;
    transition: $transition;
    &.open {
      top: 70px;
    }
  }
}

@media (max-width: 320px) {
  .navbar {
    min-width: 100%;
  }
}
</style>

<template>
  <div class="burger burger__item" @click="showNavigation">
    <span class="burger__line burger__item burger__line1"></span>
    <span class="burger__line burger__item burger__line2"></span>
    <span class="burger__line burger__item burger__line3"></span>
  </div>
</template>

<script>
export default {
  methods: {
    showNavigation(e) {
      if (e.target.className.includes('burger__item')) {
        document.querySelector('.navbar').classList.toggle('open')
        Array.from(document.querySelectorAll('.burger__line')).forEach((item) =>
          item.classList.toggle('open')
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.burger {
  display: none;
}

@media (max-width: 992px) {
  .burger {
    cursor: pointer;
    @include flexbox($direction: column, $justify-content: center, $gap: 7px);
    width: 40px;
    z-index: 11;
    &__line {
      display: inline-block;
      width: 100%;
      height: 5px;
      background-color: $secondary-font-color;
      border-radius: 20px;
      transition: $transition;
    }
    &__line1.open {
      transform: translate(0, 225%) rotate(45deg);
    }
    &__line2.open {
      background-color: transparent;
    }
    &__line3.open {
      transform: translate(0, -225%) rotate(-45deg);
    }
  }
}
</style>

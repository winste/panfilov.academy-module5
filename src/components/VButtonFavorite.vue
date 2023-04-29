<template>
  <button class="button-favorite">
    <VIcon
      :iconName="favoriteIcon"
      :iconWidth="30"
      :iconHeight="30"
      class="button-favorite__icon"
    />
  </button>
</template>

<script>
import VIcon from './VIcon.vue'
import Like from '@/assets/images/icons/Like.svg'
export default {
  components: {
    VIcon
  },
  data() {
    return {
      favoriteIcon: Like
    }
  }
}
</script>

<style lang="scss" scoped>
.button-favorite {
  background: transparent;
  &__icon {
    &:hover {
      animation: 0.5s forwards flashIcon;
    }
  }
}

@keyframes flashIcon {
  0% {
    scale: 1;
  }
  10% {
    scale: 0.9;
  }
  100% {
    scale: 1.2;
  }
}
</style>

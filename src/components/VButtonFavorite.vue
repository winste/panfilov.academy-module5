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
      // width: 40px;
      // height: 40px;
      // transition: all linear 0.2s;
      animation: 1s infinite flashIcon;
    }
  }
}

@keyframes flashIcon {
  from {
    scale: 0;
  }

  to {
    scale: 2;
    // height: 150%;
  }
}
</style>

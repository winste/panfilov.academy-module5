<template>
  <button class="button-favorite">
    <VIcon :iconName="favoriteIcon" width="26" height="23" class="button-favorite__icon" />
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
      width: 30px;
      height: 26px;
      transition: all linear 0.2s;
    }
  }
}
</style>

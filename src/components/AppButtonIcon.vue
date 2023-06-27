<template>
  <button class="button-icon">
    <AppIcon :name="icon" :width="width" :height="height" class="button-icon__icon" />
  </button>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  components: {
    AppIcon
  },
  props: {
    icon: String,
    width: {
      type: Number,
      default: 30
    },
    height: {
      type: Number,
      default: 30
    }
  }
}
</script>

<style lang="scss" scoped>
.button-icon {
  background: transparent;
  &__icon {
    &:hover {
      animation: 0.2s forwards flashIcon;
    }
  }
}

@keyframes flashIcon {
  0% {
    scale: 0.8;
  }
  100% {
    scale: 1.3;
  }
}
</style>

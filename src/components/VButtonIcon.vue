<template>
  <button class="button-icon">
    <VIcon
      :iconName="buttonIcon"
      :iconWidth="buttonWidth"
      :iconHeight="buttonHeigh"
      class="button-icon__icon"
    />
  </button>
</template>

<script>
import VIcon from './VIcon.vue'

export default {
  components: {
    VIcon,
  },
  props: {
    buttonIcon: String,
    buttonWidth: {
      type: Number,
      default: 30,
    },
    buttonHeigh: {
      type: Number,
      default: 30,
    },
  },
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

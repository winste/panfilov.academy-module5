<template>
  <button class="button-icon">
    <AppIcon
      :name="icon"
      :width="width"
      :height="height"
      class="button-icon__icon"
    />
  </button>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  components: {
    AppIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 30,
    },
    height: {
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
      transform: scale(1.1);
      transition: $transition;
    }
  }
}
</style>

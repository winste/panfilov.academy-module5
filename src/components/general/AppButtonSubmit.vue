<template>
  <button type="submit" class="button-submit">
    <AppIcon
      :name="icon"
      :width="iconWidth"
      :height="iconHeight"
      class="button-submit__icon"
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
    size: {
      type: String,
      default: '52px',
    },
    iconWidth: {
      type: Number,
      default: 20,
    },
    iconHeight: {
      type: Number,
      default: 20,
    },
  },
}
</script>

<style lang="scss" scoped>
.button-submit {
  width: v-bind(size);
  height: v-bind(size);
  background-color: $main-font-color;
  border-radius: 50%;
  @include button-hover;
  &__icon {
    margin-top: 6px;
  }
}
</style>

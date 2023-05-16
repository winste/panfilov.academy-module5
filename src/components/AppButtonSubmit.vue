<template>
  <button
    type="submit"
    class="button-submit"
    :style="{ width: `${btnSize}px`, height: `${btnSize}px` }"
  >
    <AppIcon :name="btnIcon" :width="btnIconWidth" :height="btnIconHeight" />
  </button>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  components: {
    AppIcon
  },
  props: {
    btnSize: {
      type: Number,
      default: 52
    },
    btnIcon: String,
    btnIconWidth: Number,
    btnIconHeight: Number
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/button-hover';

.button-submit {
  background-color: $main-font-color;
  border-radius: 50%;
  @include button-hover;
}
</style>

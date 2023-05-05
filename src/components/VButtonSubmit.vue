<template>
  <button
    type="submit"
    class="button-submit"
    :style="{ width: `${btnSize}px`, height: `${btnSize}px` }"
  >
    <VIcon
      :iconName="btnIcon"
      :iconWidth="btnIconWidth"
      :iconHeight="btnIconHeight"
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
    btnSize: {
      type: Number,
      default: 52,
    },
    btnIcon: String,
    btnIconWidth: Number,
    btnIconHeight: Number,
  },
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

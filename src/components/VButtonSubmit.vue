<template>
  <button
    type="submit"
    class="button-submit"
    :style="{ width: `${btnSize}px`, height: `${btnSize}px` }"
  >
    <VIcon :iconName="btnIcon" :iconWidth="btnIconWidth" :iconHeight="btnIconHeight" />
  </button>
</template>

<script>
import VIcon from './VIcon.vue'

export default {
  components: {
    VIcon
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
.button-submit {
  background-color: rgba(72, 72, 72, 1);
  border-radius: 50%;
  &:hover {
    box-shadow: inset 0 0 5px 2px #ffffffb7;
  }
}
</style>

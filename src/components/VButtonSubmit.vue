<template>
  <button type="submit" class="button-submit">
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
    btnIcon: String,
    btnIconWidth: Number,
    btnIconHeight: Number
  }
}
</script>

<style lang="scss" scoped>
.button-submit {
  width: 54px;
  height: 54px;
  background-color: rgba(72, 72, 72, 1);
  border-radius: 50%;
}
</style>

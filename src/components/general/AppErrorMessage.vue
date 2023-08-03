<template>
  <span v-show="errorCheck" class="error-msg">
    <p v-text="msg"></p>
  </span>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },

  computed: {
    errorCheck() {
      return /4\d{2}|5\d{2}/.test(this.msg)
    },
  },
}
</script>

<style lang="scss" scoped>
.error-msg {
  position: fixed;
  top: 0%;
  right: 0%;
  @include flexbox($align-items: center, $justify-content: center);
  padding: 10px;
  max-width: 200px;
  font-size: 12px;
  background-color: #ffffff;
  border: 1px solid #ff0000cc;
  box-shadow: $box-shadow;
}
</style>
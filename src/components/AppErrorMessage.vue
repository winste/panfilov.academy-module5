<template>
  <span v-show="errorCheck" class="error-msg">
    <p v-text="msg"></p>
  </span>
</template>

<script>
export default {
  props: {
    msg: String,
  },

  computed: {
    errorCheck() {
      return /4\d{2}|5\d{2}/.test(this.msg)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-center';
.error-msg {
  position: fixed;
  top: 0%;
  right: 0%;
  @include flexbox-center;
  padding: 10px;
  max-width: 200px;
  background-color: rgb(255, 255, 255);
  font-size: 12px;
  border: 1px solid rgba(255, 0, 0, 0.801);
  box-shadow: $box-shadow;
}
</style>

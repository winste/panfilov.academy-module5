<template>
  <span class="error-msg">
    <p v-text="msg"></p>
  </span>
</template>

<script>
export default {
  props: {
    msg: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
.error-msg {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  max-width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: white;
  font-size: 12px;
  border: 1px solid rgba(255, 0, 0, 0.801);
  box-shadow: $box-shadow;
}
</style>

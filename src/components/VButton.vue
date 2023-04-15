<template>
  <button :type="typeBtn" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    typeBtn: String
  }
}
</script>

<style lang="scss">
.button {
  width: 54px;
  height: 54px;
  background-color: rgba(72, 72, 72, 1);
  border-radius: 50%;
}
</style>

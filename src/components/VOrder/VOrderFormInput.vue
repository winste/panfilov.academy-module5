<template>
  <input :type="inputType" :placeholder="inputPlaceholder" class="input" />
</template>

<script>
export default {
  props: {
    inputType: String,
    inputPlaceholder: String
  }
}
</script>

<style lang="scss" scoped>
.input {
  padding: 14.5px 14px 15.1px 14px;
  min-width: 329px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
</style>

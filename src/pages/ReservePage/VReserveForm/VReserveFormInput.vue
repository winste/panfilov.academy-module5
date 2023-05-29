<template>
  <input
    :type="inputType"
    :placeholder="inputPlaceholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="input"
  />
</template>

<script>
export default {
  props: {
    modelValue: '',
    inputType: String,
    inputPlaceholder: String
  }
}
</script>

<style lang="scss" scoped>
.input {
  padding: 14px 14px 12px 14px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
</style>

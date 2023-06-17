<template>
  <input
    type="number"
    min="1"
    max="20"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="input-number"
  />
</template>

<script>
export default {
  props: {
    modelValue: '',
    placeholder: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/placeholder';

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.input-number {
  min-height: 24px;
  @include placeholder-style;
}
</style>

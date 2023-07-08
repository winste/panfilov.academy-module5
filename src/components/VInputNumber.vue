<template>
  <input
    type="number"
    min="1"
    max="20"
    :placeholder="placeholder"
    :value="modelValue"
    class="input-number"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: '' },
  },
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
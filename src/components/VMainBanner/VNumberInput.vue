<template>
  <label for="select" class="number-title label">
    {{ label }}
  </label>
  <input type="number" min="1" max="20" class="input-number" value="" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String
  }
}
</script>

<style lang="scss">
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
  margin-top: 3.5px;
  @include placeholder-style;
}
</style>

<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
    />
    <span v-if="error" v-text="message" class="input__msg"> </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: '',
    type: String,
    placeholder: String,
    height: {
      type: String,
      default: '49px'
    },
    width: {
      type: String,
      default: '329px'
    },
    error: {
      type: Boolean,
      default: false
    },
    message: ''
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-direction';
@import '@/assets/scss/mixins/reserve-input';

.input-wrapper {
  @include flexbox-direction($direction: column, $gap: 0);
}

.input {
  @include reserve-input($width: v-bind(width), $height: v-bind(height));
  &__msg {
    padding: 5px 10px;
    font-size: 10px;
    color: rgb(255, 0, 0);
  }
}
</style>

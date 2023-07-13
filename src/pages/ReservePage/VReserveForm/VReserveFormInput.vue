<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="error" class="input__msg" v-text="message"> </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '49px',
    },
    width: {
      type: String,
      default: '329px',
    },
    error: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: 'value',
    },
  },
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

@media (max-width: 768px) {
  .input {
    min-width: 100%;
  }
}
</style>
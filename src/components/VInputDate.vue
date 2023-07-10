<template>
  <VueDatePicker
    :placeholder="placeholder"
    :enable-time-picker="false"
    :model-value="modelValue"
    hide-input-icon
    class="date"
    input-class-name="date__input"
    @update:model-value="setDate"
  />
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: {
    VueDatePicker,
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  methods: {
    setDate(value) {
      this.$emit('update:modelValue', value)
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins/placeholder';

.date {
  &__input {
    font-size: 13px;
    border: none;
    padding: 0;
    @include placeholder-style;
  }
}
</style>
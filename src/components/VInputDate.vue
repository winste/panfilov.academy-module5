<template>
  <label v-text="label" for="select" class="date-title label"></label>
  <VueDatePicker
    :placeholder="placeholder"
    :enable-time-picker="false"
    :model-value="modelValue"
    @update:model-value="setDate"
    hide-input-icon
    class="date"
    input-class-name="date__input"
  />
</template>
<script>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: {
    VueDatePicker
  },

  props: {
    modelValue: '',
    label: String,
    placeholder: String
  },
  methods: {
    setDate(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/mixins/placeholder';

.date {
  &__input {
    margin-top: 3.5px;
    font-size: 13px;
    border: none;
    padding: 0;
    @include placeholder-style;
  }
}
</style>

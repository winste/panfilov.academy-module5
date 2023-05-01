<template>
  <label for="select" class="date-title label">
    {{ label }}
  </label>
  <VueDatePicker
    v-model="date"
    :placeholder="placeholder"
    :enable-time-picker="false"
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
  data() {
    return {
      date: null
    }
  },
  props: {
    label: String,
    placeholder: String
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

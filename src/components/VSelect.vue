<template>
  <label v-if="label" v-text="label" for="select" class="select-title label"></label>
  <VueSelect
    :options="options"
    :placeholder="placeholder"
    :model-value="modelValue"
    @update:model-value="setSelected"
    class="select"
  />
</template>

<script>
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  components: {
    VueSelect
  },

  props: {
    modelValue: '',
    options: Array,
    label: {
      type: String,
      default: null
    },
    placeholder: String,
    style: {
      type: Boolean,
      default: true
    },
    color: String,
    weight: String
  },

  methods: {
    setSelected(value) {
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style scoped>
* {
  --vs-search-input-placeholder-color: v-bind(color);
}
</style>

<style lang="scss">
@import '@/assets/scss/const';

.select {
  min-width: 100%;
  & .vs__dropdown-toggle,
  .vs__search {
    padding: 0;
    margin: 0;
    border: none;
    border: none;
  }
  & .vs__open-indicator,
  .vs__actions {
    display: none;
  }
  & .vs__selected {
    font-size: 13px;
    margin: 0;
    padding: 0;
  }
  & .vs__selected-options {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & .vs__search {
    font-size: 14px;
    font-family: $main-font-family;
    font-weight: v-bind(weight);
  }
}
</style>

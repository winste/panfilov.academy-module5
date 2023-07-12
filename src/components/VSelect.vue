<template>
  <VueSelect
    :options="options"
    :placeholder="placeholder"
    :model-value="modelValue"
    class="select"
    @update:model-value="setSelected"
  />
</template>

<script>
import VueSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  components: {
    VueSelect,
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'rgb(194, 198, 204)',
    },
    weight: {
      type: String,
      default: '600',
    },
  },

  methods: {
    setSelected(value) {
      this.$emit('update:modelValue', value)
    },
  },
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
    display: flex;
    align-items: baseline;
    margin: 0;
    padding: 0;
  }
  & .vs__selected-options {
    height: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
    z-index: 0;
  }
  & .vs__search {
    font-size: 14px;
    font-family: $main-font-family;
    font-weight: v-bind(weight);
  }
}
</style>
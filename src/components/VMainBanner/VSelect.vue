<template>
  <label for="select" class="select-title label">
    {{ label }}
  </label>
  <v-select class="select" :options="options" :placeholder="placeholder" />
</template>

<script>
import 'vue-select/dist/vue-select.css'
export default {
  props: {
    label: String,
    options: Array,
    placeholder: String
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins/placeholder';

.select {
  min-width: 250px;
  margin-top: 3.5px;
  min-height: 24px;
  & .vs__dropdown-toggle,
  .vs__search {
    padding: 0;
    margin: 0;
    border: none;
    border: none;
  }
  & .vs__search {
    @include placeholder-style;
    font-size: 13px;
  }
  & .vs__open-indicator {
    display: none;
  }
  & .vs__selected {
    font-size: 13px;
    margin: 0;
    padding: 0;
  }
  & .vs__selected-options {
    max-height: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>

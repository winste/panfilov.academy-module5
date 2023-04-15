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
@import '../assets/scss/mixins/placeholder';

.select {
  min-width: 250px;
  & .vs__dropdown-toggle,
  .vs__search {
    padding: 0;
    margin: 0;
    border: none;
    border: none;
  }
  & .vs__search {
    @include placeholder-style;
  }
  & .vs__open-indicator {
    display: none;
  }
}
</style>

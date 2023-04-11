<template>
  <label for="select" class="select-title label">
    {{ label }}
  </label>
  <vSelect :options="options" :placeholder="placeholder" />
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
  },
  props: {
    label: String,
    options: Array,
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped></style>

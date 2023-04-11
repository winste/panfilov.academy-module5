<template>
  <label for="select" class="date-title label">
    {{ label }}
  </label>
  <VueDatePicker value="" :placehoder="placehoder" />
</template>
<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: {
    VueDatePicker,
  },
  props: {
    label: String,
    placehoder: String,
  },
};
</script>
<style lang=""></style>

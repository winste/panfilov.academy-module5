<template>
  <label for="select" class="date-title label">
    {{ label }}
  </label>
  <input type="number" max="15" min="1" class="input-number" :placehoder="placehoder" />
</template>

<script>
export default {
  props: {
    label: String,
    placehoder: String,
  },
};
</script>

<style lang=""></style>

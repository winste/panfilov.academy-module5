<template>
  <span class="property-preview"> {{ count }} {{ name }}</span>
</template>

<script>
export default {
  props: {
    count: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.property-preview {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: $secondary-font-color;
}
</style>

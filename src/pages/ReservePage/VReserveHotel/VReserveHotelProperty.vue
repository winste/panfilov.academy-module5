<template>
  <span class="property-preview"> {{ count }} {{ name }}</span>
</template>

<script>
export default {
  props: {
    count: String,
    name: String
  }
}
</script>

<style lang="scss" scoped>
.property-preview {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: rgb(154, 154, 154);
}
</style>

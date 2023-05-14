<template>
  <span class="property-preview"> {{ countProperty }} {{ nameProperty }} </span>
</template>

<script>
export default {
  props: {
    countProperty: Number,
    nameProperty: String
  }
}
</script>

<style lang="scss" scoped>
.property-preview {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #9a9a9a;
}
</style>

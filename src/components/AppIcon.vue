<template>
  <svg :width="width" :height="height">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
    },
  },
}
</script>
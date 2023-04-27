<template>
  <svg :width="iconWidth" :height="iconHeight">
    <use :xlink:href="`#${iconName}`" />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: String,
    iconWidth: {
      type: Number,
      default: 20
    },
    iconHeight: {
      type: Number,
      default: 20
    }
  }
}
</script>

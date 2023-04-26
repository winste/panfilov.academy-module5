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
      type: String,
      default: '20'
    },
    iconHeight: {
      type: String,
      default: '20'
    }
  }
}
</script>

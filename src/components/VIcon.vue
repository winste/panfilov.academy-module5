<template>
  <svg :width="width" :height="height" :class="class">
    <use :xlink:href="`#${nameIcon}`" />
  </svg>
</template>

<script>
export default {
  props: {
    nameIcon: String,
    class: String,
    width: String,
    height: String,
  },
};
</script>

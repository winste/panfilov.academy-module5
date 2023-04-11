<template>
  <svg :width="20" :height="20" :class="class">
    <use :xlink:href="`#${nameIcon}`" />
  </svg>
</template>

<script>
export default {
  props: {
    nameIcon: String,
    class: String,
    width: Number,
    height: Number,
  },
};
</script>

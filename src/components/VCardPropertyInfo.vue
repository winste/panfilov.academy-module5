<template>
  <div class="property-info">
    <VIcon :nameIcon="propertyIcon" />
    {{ propertyCount }}
  </div>
</template>

<script>
import VIcon from './VIcon.vue'

export default {
  components: {
    VIcon
  },
  props: {
    propertyIcon: String,
    propertyCount: String
  }
}
</script>

<style lang=""></style>

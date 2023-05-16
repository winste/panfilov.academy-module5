<template>
  <div class="property">
    <div class="property__icon">
      <AppIcon :name="propertyIcon" :width="40" :height="40" />
    </div>
    <span> {{ propertyCount }} {{ propertyName }} </span>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'

export default {
  components: {
    AppIcon
  },
  props: {
    propertyIcon: String,
    propertyName: String,
    propertyCount: Number
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

$property-width: 176px;
$property-height: 160px;

.property {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: $property-width;
  min-height: $property-height;
  background-color: $main-decor-color;
  border-radius: 8px;
}
</style>

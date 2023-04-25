<template>
  <div class="card-property">
    <div class="card-property-item">
      <VIcon :nameIcon="iconBedroom" />
      {{ propertyList[0].bedroom }}
    </div>

    <div class="card-property-item">
      <VIcon :nameIcon="iconBathroom" />
      {{ propertyList[0].bathroom }}
    </div>
  </div>
</template>

<script>
import VIcon from './VIcon.vue'
import Bedroom from '@/assets/images/icons/Bedroom.svg'
import Bathroom from '@/assets/images/icons/Bathroom.svg'

export default {
  components: {
    VIcon
  },
  data() {
    return {
      iconBedroom: Bedroom,
      iconBathroom: Bathroom
    }
  },
  props: {
    propertyList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.card-property {
  display: flex;
  gap: 16px;
  &-item {
    display: flex;
    gap: 8px;
  }
}
</style>

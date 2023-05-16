<template>
  <div class="card-property">
    <div class="card-property__item">
      <AppIcon
        :name="iconBedroom"
        :width="25"
        :height="24"
        class="card-property__icon card-property__icon-bed"
      />
      <span v-text="propertyList[0].bedroom" class="card-property__number"></span>
    </div>

    <div class="card-property__item">
      <AppIcon
        :name="iconBathroom"
        :width="20"
        :height="21"
        class="card-property__icon card-property__icon-bath"
      />
      <span v-text="propertyList[0].bathroom" class="card-property__number"></span>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'
import Bedroom from '@/assets/images/icons/Bedroom.svg'
import Bathroom from '@/assets/images/icons/Bathroom.svg'

export default {
  components: {
    AppIcon
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
  align-items: center;
  gap: 21px;
  &__item {
    display: flex;
    gap: 7px;
  }
  &__icon {
    margin-left: 1px;
    &-bed {
      margin-left: 3px;
    }
    &-bath {
      margin-bottom: 2px;
    }
  }
  &__number {
    align-self: center;
  }
}
</style>

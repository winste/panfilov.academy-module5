<template>
  <div class="card-property">
    <AppIcon
      :name="iconName"
      :width="iconWidth"
      :height="iconHeight"
      class="card-property__icon card-property__icon-pet"
    />
    <span v-text="count" class="card-property__number"></span>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'
import Bedroom from '@/assets/images/icons/Bedroom.svg'
import Bathroom from '@/assets/images/icons/Bathroom.svg'
import Parking from '@/assets/images/icons/Parking.svg'
import Pet from '@/assets/images/icons/Pet.svg'

export default {
  components: {
    AppIcon
  },

  data() {
    return {
      iconBedroom: Bedroom,
      iconBathroom: Bathroom,
      iconParking: Parking,
      iconPet: Pet
    }
  },

  props: {
    name: String,
    width: {
      type: Number,
      default: 25
    },
    height: {
      type: Number,
      default: 24
    },
    count: String,
    showAll: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    iconName() {
      const icon = {
        bedroom: this.iconBathroom,
        bathroom: this.iconBathroom,
        parking: this.iconParking,
        pet: this.iconPet
      }
      return icon[this.name]
    },

    iconWidth() {
      return this.name == 'bathroom' ? 20 : this.width
    },

    iconHeight() {
      return this.name == 'bathroom' ? 21 : this.width
    }
  }
}
</script>

<style lang="scss" scoped>
.card-property {
  display: flex;
  align-items: center;
  gap: 7px;
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

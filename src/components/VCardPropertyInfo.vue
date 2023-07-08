<template>
  <div class="card-property">
    <AppIcon
      :name="iconName"
      :width="iconWidth"
      :height="iconHeight"
      class="card-property__icon card-property__icon-pet"
    />
    <span class="card-property__number" v-text="count"></span>
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
    AppIcon,
  },

  props: {
    name: { type: String, required: true },
    width: {
      type: Number,
      default: 25,
    },
    height: {
      type: Number,
      default: 24,
    },
    count: { type: String, required: true },
  },

  data() {
    return {
      iconBedroom: Bedroom,
      iconBathroom: Bathroom,
      iconParking: Parking,
      iconPet: Pet,
    }
  },

  computed: {
    iconName() {
      const icon = {
        bedroom: this.iconBedroom,
        bathroom: this.iconBathroom,
        parking: this.iconParking,
        pet: this.iconPet,
      }
      return icon[this.name]
    },

    iconWidth() {
      const icon = {
        bathroom: 20,
        parking: 22,
        pet: 24,
      }
      return icon[this.name] ? icon[this.name] : this.width
    },

    iconHeight() {
      const icon = {
        bathroom: 21,
        parking: 20,
        pet: 22,
      }
      return icon[this.name] ? icon[this.name] : this.width
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';
.card-property {
  @include flexbox-general($gap: 7px);
  align-items: center;
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
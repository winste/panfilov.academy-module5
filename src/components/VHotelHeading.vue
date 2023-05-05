<template>
  <div class="hotel-detail__info">
    <div class="hotel-detail__heading">
      <VHotelTitle
        :hotelTitleName="hotelName"
        :hotelTitleAddress="hotelAddress"
      />
      <div class="hotel-detail__interaction">
        <VButtonIcon
          :buttonIcon="hotelButtonLike"
          :buttonWidth="36"
          :buttonHeigh="36"
        />
        <VButtonIcon
          :buttonIcon="hotelButtonShare"
          :buttonWidth="35"
          :buttonHeigh="35"
        />
      </div>
    </div>

    <div class="hotel-detail__property">
      <VHotelProperty
        :propertyIcon="hotelPropertyBedroom"
        :propertyCount="hotelCountBedroom"
        propertyName="Bedrooms"
      />
      <VHotelProperty
        :propertyIcon="hotelPropertyBathroom"
        :propertyCount="hotelCountBathroom"
        propertyName="Bathrooms"
      />
    </div>

    <VReserveSideBar :reservePrice="hotelPrice" class="hotel-detail__reverse" />
  </div>
</template>

<script>
import VIcon from '../components/VIcon.vue'
import VButtonIcon from '../components/VButtonIcon.vue'
import LikeBig from '../assets/images/icons/LikeBig.svg'
import Share from '../assets/images/icons/Share.svg'
import Bedroom from '../assets/images/icons/Bedroom.svg'
import Bathroom from '../assets/images/icons/Bathroom.svg'
import VHotelProperty from './VHotelProperty.vue'
import VReserveSideBar from '../components/VReserveSideBar.vue'
import VHotelTitle from './VHotelTitle.vue'

export default {
  components: {
    VButtonIcon,
    VIcon,
    VReserveSideBar,
    VHotelProperty,
    VHotelTitle,
  },
  props: {
    hotelName: String,
    hotelAddress: String,
    hotelCountBedroom: Number,
    hotelCountBathroom: Number,
    hotelPrice: Array,
  },
  data() {
    return {
      hotelButtonLike: LikeBig,
      hotelButtonShare: Share,
      hotelPropertyBedroom: Bedroom,
      hotelPropertyBathroom: Bathroom,
    }
  },
}
</script>

<style lang="scss" scoped></style>

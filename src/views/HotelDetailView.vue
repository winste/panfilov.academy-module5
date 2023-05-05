<template>
  <main class="hotel" v-if="hotelData">
    <div class="hotel-wrapper">
      <VImageGallery
        :galleryMainImage="hotelData.image"
        :galleryImages="hotelData.images"
        class="hotel__gallery"
      />

      <div class="container-wrapper">
        <div class="hotel__info">
          <div class="hotel__heading">
            <VHotelTitle :hotelName="hotelData.name" :hotelAddress="hotelData.address" />
            <div class="hotel__interaction">
              <VButtonIcon :buttonIcon="buttonIconLike" :buttonWidth="36" :buttonHeigh="36" />
              <VButtonIcon :buttonIcon="buttonIconSearch" :buttonWidth="35" :buttonHeigh="35" />
            </div>
          </div>

          <div class="hotel__property">
            <VHotelProperty
              :propertyIcon="iconBedroom"
              :propertyCount="+hotelData.info[0].bedroom"
              propertyName="Bedrooms"
            />
            <VHotelProperty
              :propertyIcon="iconBedroom"
              :propertyCount="+hotelData.info[0].bathroom"
              propertyName="Bathrooms"
            />
          </div>

          <VReserveSideBar :reservePrice="hotelData.price" class="hotel__reserve" />
        </div>
        <div class="hotel__information">
          <div class="hotel__description">
            <h3 class="hotel__description-title">Apartment Description</h3>
            <VHotelDescription :hotelDescription="hotelData.description[0]" />
          </div>
          <VHotelAmenities :amenitiesList="hotelData.amenities" :amenitiesDisplayedCount="6" />
          <VHotelReviewsSection :reviewsList="hotelData.reviews" :reviewsDisplayedCount="4" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { api } from '@/api/api'
import VImageGallery from '../components/VImageGallery.vue'
import VButtonIcon from '../components/VButtonIcon.vue'
import LikeBig from '../assets/images/icons/LikeBig.svg'
import Share from '../assets/images/icons/Share.svg'
import Bedroom from '../assets/images/icons/Bedroom.svg'
import Bathroom from '../assets/images/icons/Bathroom.svg'
import VReserveSideBar from '../components/VReserveSideBar.vue'
import VHotelHeading from '../components/VHotelHeading.vue'
import VHotelProperty from '../components/VHotelProperty.vue'
import VHotelTitle from '../components/VHotelTitle.vue'
import VHotelDescription from '../components/VHotelDescription.vue'
import VHotelAmenities from '../components/VHotelAmenities.vue'
import VHotelReviewsSection from '../components/VHotelReviewsSection.vue'

export default {
  components: {
    VImageGallery,
    VButtonIcon,
    VReserveSideBar,
    VHotelHeading,
    VHotelProperty,
    VHotelTitle,
    VHotelDescription,
    VHotelAmenities,
    VHotelReviewsSection
  },
  data() {
    return {
      idHotel: this.$route.params.id,
      hotelData: null,
      iconBedroom: Bedroom,
      iconBathroom: Bathroom,
      buttonIconLike: LikeBig,
      buttonIconSearch: Share
    }
  },
  async created() {
    await api
      .fetchData(`/hotel/detail/${this.idHotel}`)
      .then((response) => (this.hotelData = response.data))
  },
  computed: {
    formattedText() {
      return this.hotelData.description[0].split('""')
    }
  }
}
</script>

<style lang="scss" scoped>
.hotel {
  &-wrapper {
    padding: 0 16px;
  }
  &__gallery {
    margin-top: 35px;
    margin-bottom: 90px;
  }
  &__info {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 90px;
    margin-bottom: 57px;
  }
  &__heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  &__interaction {
    display: flex;
    gap: 24px;
  }
  &__reserve {
    grid-area: 1/2/3/3;
    align-self: start;
  }
  &__property {
    display: flex;
    gap: 14px;
  }
  &__description {
    margin-bottom: 80px;
    &-title {
      margin-bottom: 15px;
    }
  }
  &__reviews-name {
    min-width: 180px;
  }
  &__reviews-total {
    display: flex;
    flex-wrap: wrap;
    gap: 13px 45px;
  }
  &__reviews-item {
    display: flex;
  }
  &__reviews-rating {
    min-width: 150px;
  }
}

.hotel__information {
  max-width: 800px;
  margin-bottom: 31px;
}
</style>

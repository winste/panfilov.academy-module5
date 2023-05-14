<template>
  <main class="hotel" v-if="hotelData">
    <div class="hotel-wrapper">
      <VGallery
        :avatarUrl="hotelData.author.avatar"
        :authorName="hotelData.name"
        :price="hotelData.price"
        :galleryMainImage="hotelData.image"
        :galleryImages="hotelData.images"
        class="hotel__gallery"
      />

      <div class="container-wrapper">
        <div class="hotel__main">
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
              :propertyIcon="iconBathroom"
              :propertyCount="+hotelData.info[0].bathroom"
              propertyName="Bathrooms"
            />
          </div>

          <VReserveSideBar
            :reservePrice="hotelData.price"
            :reserveIdHotel="idHotel"
            class="hotel__reserve"
          />
          <VHotelDescription :hotelDescription="hotelData.description[0]" />
        </div>

        <div class="hotel__information">
          <VAmenitiesSection :amenitiesList="hotelData.amenities" :amenitiesDisplayedCount="6" />
          <VMap
            :mapCoords="hotelData.coords"
            mapWidth="771px"
            mapHeight="420px"
            class="hotel__map"
          />
          <VReviewsSection :reviewsList="hotelData.reviews" :reviewsDisplayedCount="4" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useHotelStore } from '@/store/hotelStore'
import VGallery from '../components/VGallery/VGallery.vue'
import VButtonIcon from '../components/VButtonIcon.vue'
import LikeBig from '../assets/images/icons/LikeBig.svg'
import Share from '../assets/images/icons/Share.svg'
import Bedroom from '../assets/images/icons/Bedroom.svg'
import Bathroom from '../assets/images/icons/Bathroom.svg'
import VReserveSideBar from '../components/VReserveSideBar.vue'
import VHotelProperty from '../components/VHotel/VHotelProperty.vue'
import VHotelTitle from '../components/VHotel/VHotelTitle.vue'
import VHotelDescription from '../components/VHotel/VHotelDescription.vue'
import VAmenitiesSection from '../components/VAmenitiesSection/VAmenitiesSection.vue'
import VReviewsSection from '../components/VReviewsSection/VReviewsSection.vue'
import VMap from '../components/VMap.vue'

export default {
  components: {
    VGallery,
    VButtonIcon,
    VReserveSideBar,
    VHotelProperty,
    VHotelTitle,
    VHotelDescription,
    VAmenitiesSection,
    VReviewsSection,
    VMap
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
    const store = useHotelStore()
    await store.fetchHotelDetail(this.idHotel)
    this.hotelData = store.getHotelDetail
  }
}
</script>

<style lang="scss" scoped>
.hotel {
  &-wrapper {
    padding: 0 13px 0 19px;
    margin-top: 35px;
  }
  &__gallery {
    margin-bottom: 90px;
  }
  &__main {
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
    margin-bottom: 57px;
  }
  &__information {
    max-width: 800px;
    margin-bottom: 31px;
  }
  &__map {
    margin-bottom: 43px;
  }
}
</style>

<template>
  <main v-if="hotelData" class="hotel">
    <div class="hotel__detail">
      <AppMetaTags :meta-info="metaInfo" />
      <VHotelGallery
        :avatar="hotelData.author.avatar"
        :name="hotelData.author.name || hotelData.name"
        :price="hotelData.price"
        :main-image="hotelData.image"
        :images="hotelData.images"
        :count-displayed-images="4"
        class="hotel__gallery"
      />

      <div class="container-wrapper">
        <div class="hotel__main">
          <div class="hotel__heading">
            <VHotelTitle :name="hotelData.name" :address="hotelData.address" />
            <div class="hotel__interaction">
              <AppButtonIcon :icon="buttonIconLike" :width="36" :height="36" />
              <AppButtonIcon :icon="buttonIconSearch" :width="35" :height="35" />
            </div>
          </div>

          <div class="hotel__property">
            <VHotelProperty
              :icon="iconBedroom"
              :count="+hotelData.info[0].bedroom"
              name="Bedrooms"
            />
            <VHotelProperty
              :icon="iconBathroom"
              :count="+hotelData.info[0].bathroom"
              name="Bathrooms"
            />
          </div>

          <VHotelReserveSideBar
            :id="hotelData._id"
            :name="hotelData.name"
            :address="hotelData.address"
            :price="hotelData.price"
            :properties="hotelData.info[0]"
            :image="hotelData.image"
            class="hotel__reserve"
          />
          <VHotelDescription
            :hotel-description="hotelData.description[0]"
            class="hotel__description"
          />
        </div>

        <div class="hotel__information">
          <VAmenitiesSection :amenities="hotelData.amenities" />
          <VMap :coords="hotelData.coords" width="771px" height="420px" class="hotel__map" />
          <VReviewsSection :reviews-list="hotelData.reviews" />
        </div>
      </div>
    </div>
    <AppErrorMessage v-if="error" :msg="error" />
  </main>
</template>

<script>
import { api } from '@/api/api'
import AppButtonIcon from '@/components/general/AppButtonIcon.vue'
import LikeBig from '@/assets/images/icons/LikeBig.svg'
import Share from '@/assets/images/icons/Share.svg'
import Bedroom from '@/assets/images/icons/Bedroom.svg'
import Bathroom from '@/assets/images/icons/Bathroom.svg'
import VHotelReserveSideBar from '@/components/detailPage/VHotel/VHotelReserveSideBar.vue'
import VHotelProperty from '@/components/detailPage/VHotel/VHotelProperty.vue'
import VHotelTitle from '@/components/detailPage/VHotel/VHotelTitle.vue'
import VHotelDescription from '@/components/detailPage/VHotel/VHotelDescription.vue'
import VHotelGallery from '@/components/detailPage/VHotel/VHotelGallery.vue'
import VAmenitiesSection from '@/components/detailPage/VAmenitiesSection/VAmenitiesSection.vue'
import VReviewsSection from '@/components/detailPage/VReviewsSection/VReviewsSection.vue'
import VMap from '@/components/general/VMap.vue'
import AppMetaTags from '@/components/general/AppMetaTags.vue'
import metaTags from '@/helpers/metaTags'
import AppErrorMessage from '@/components/general/AppErrorMessage.vue'

export default {
  name: 'MyComponent',
  components: {
    VHotelGallery,
    AppButtonIcon,
    VHotelReserveSideBar,
    VHotelProperty,
    VHotelTitle,
    VHotelDescription,
    VAmenitiesSection,
    VReviewsSection,
    VMap,
    AppMetaTags,
    AppErrorMessage,
  },

  data() {
    return {
      idHotel: this.$route.params.id,
      hotelData: null,
      iconBedroom: Bedroom,
      iconBathroom: Bathroom,
      buttonIconLike: LikeBig,
      buttonIconSearch: Share,
      error: null,

      metaInfo: metaTags(
        'Hotel Detail Information',
        'Detailed information about the selected hotel for booking in the desired country',
        'hotel detail information, hotels all over the world, large selection of hotels in many countries, hotels booking, hotels search'
      ),
    }
  },

  async created() {
    await api
      .fetchData(`/hotel/detail/${this.idHotel}`)
      .then((response) => (this.hotelData = response.data))
      .catch((error) => (this.error = error.message))
  },
}
</script>

<style lang="scss" scoped>
.hotel {
  &__detail {
    margin-bottom: 51px;
  }
  &__gallery {
    margin: 35px 0 90px;
    padding: 0 14px;
  }
  &__main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 88px;
    margin-bottom: 63px;
  }
  &__heading {
    @include flexbox($justify-content: space-between, $gap: 40px);
    margin-bottom: 55px;
  }
  &__interaction {
    @include flexbox($gap: 18px);
    margin-top: 5px;
  }
  &__reserve {
    grid-area: 1/2/3/3;
    align-self: start;
    margin-top: 5px;
  }
  &__property {
    @include flexbox($gap: 14px);
    margin-bottom: 27px;
  }
  &__description {
    margin-top: 30px;
  }
  &__information {
    max-width: 800px;
  }
  &__map {
    margin-bottom: 43px;
  }
}

@media (max-width: 1024px) {
  .hotel {
    &__main {
      display: block;
    }
  }
}
</style>
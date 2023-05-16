<template>
  <section class="hotel-preview" v-if="hotelData">
    <div class="hotel-preview__main">
      <img :src="hotelData.image" alt="Hotel image" class="hotel-preview__image" />
      <div class="hotel-preview__info">
        <VCardTitleInfo
          :cardId="idHotel"
          :cardName="hotelData.name"
          :cardAddress="hotelData.address"
          class="hotel-preview__address"
        />
        <span class="hotel-preview__property">
          <VReserveHotelProperty
            v-for="(name, count) in hotelData.info[0]"
            :key="name"
            :nameProperty="count"
            :countProperty="name"
          />
        </span>
      </div>
    </div>

    <div class="hotel-preview__price">
      <h3 class="hotel-preview__price-title">Price Details</h3>
      <span class="hotel-preview__price-info">
        <span>Short Period: {{ hotelData.price[0] }}</span>
        <span>Meduim Period: {{ hotelData.price[1] }}</span>
        <span>Long Period: {{ hotelData.price[1] }}</span>
      </span>
    </div>
  </section>
</template>

<script>
import { useHotelStore } from '@/store/hotelStore'
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import VReserveHotelProperty from './VReserveHotelProperty.vue'

export default {
  components: {
    VCardTitleInfo,
    VReserveHotelProperty
  },
  data() {
    return {
      hotelData: null,
      idHotel: this.$route.params.id
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
.hotel-preview {
  padding: 30px;
  max-width: 480px;
  min-height: 349px;
  background: rgb(239, 240, 242);
  border-radius: 10px;
  &__main {
    display: flex;
    gap: 22px;
    margin-bottom: 47px;
  }
  &__image {
    width: 100px;
    height: 100px;
    left: 835px;
    top: 193px;
    background: rgb(194, 198, 204);
    border-radius: 6px;
  }
  &__address {
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(224, 226, 230);
  }
  &__property {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 10px;
    text-transform: capitalize;
  }
  &__price {
    &-title {
      font-size: 18px;
      margin-bottom: 17px;
    }
    &-info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #9a9a9a;
    }
  }
}
</style>

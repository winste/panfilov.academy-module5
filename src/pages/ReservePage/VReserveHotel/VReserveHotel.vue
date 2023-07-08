<template>
  <section class="hotel-preview">
    <div class="hotel-preview__main">
      <img :src="hotelData.image" alt="Hotel image" class="hotel-preview__image" />
      <div class="hotel-preview__info">
        <VCardTitleInfo
          :id="hotelData.id"
          :name="hotelData.name"
          :address="hotelData.address"
          gap="5px"
          class="hotel-preview__address"
        />
        <span class="hotel-preview__property">
          <VReserveHotelProperty
            v-for="(count, name) in hotelData.properties"
            :key="name"
            :count="count"
            :name="name"
          />
        </span>
      </div>
    </div>

    <div class="hotel-preview__price">
      <h3 class="hotel-preview__price-title">Price Details</h3>
      <span class="hotel-preview__price-info">
        <span>Short Period: {{ correctPrice[0] }}</span>
        <span>Medium Period: {{ correctPrice[1] }}</span>
        <span>Long Period: {{ correctPrice[1] }}</span>
      </span>
    </div>
  </section>
</template>

<script>
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import formattedPrice from '@/helpers/formattedPrice'
import VReserveHotelProperty from './VReserveHotelProperty.vue'

export default {
  components: {
    VCardTitleInfo,
    VReserveHotelProperty,
  },

  props: {
    hotelData: { type: Object, required: true },
  },

  computed: {
    correctPrice() {
      return formattedPrice.addSpace(this.hotelData.price)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-general';
@import '@/assets/scss/mixins/flexbox-direction';

.hotel-preview {
  padding: 30px 30px 58px 31px;
  background: $main-decor-color;
  border-radius: 10px;
  &__main {
    @include flexbox-general($wrap: nowrap, $gap: 22px);
    margin-bottom: 47px;
  }
  &__image {
    width: 100px;
    height: 100px;
    border-radius: 6px;
  }
  &__address {
    padding-bottom: 13px;
    border-bottom: 1px solid $card-bg-color;
  }
  &__property {
    @include flexbox-general($gap: 15px);
    margin-top: 10px;
    text-transform: capitalize;
  }
  &__info {
    @include flexbox-direction($direction: column, $gap: 0);
    justify-content: center;
  }
  &__price {
    &-title {
      font-size: 18px;
      letter-spacing: -0.3px;
      margin-bottom: 18px;
    }
    &-info {
      @include flexbox-direction($direction: column, $gap: 10px);
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: $secondary-font-color;
    }
  }
}

@media (max-width: 480px) {
  .hotel-preview {
    &__main {
      flex-direction: column;
      gap: 10px;
    }
    &__property {
      gap: 5px;
    }
  }
}
</style>
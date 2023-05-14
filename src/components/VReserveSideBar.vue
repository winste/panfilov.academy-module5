<template>
  <div class="reserve">
    <div v-text="formattedPrice" class="reserve__price"></div>
    <router-link :to="linkForOrder">
      <VButtonReserve />
    </router-link>
  </div>
</template>

<script>
import VButtonReserve from './VButtonReserve.vue'

export default {
  components: {
    VButtonReserve
  },
  props: {
    reservePrice: {
      type: Object,
      defaut: () => {}
    },
    reserveIdHotel: String
  },
  computed: {
    formattedPrice() {
      return this.reservePrice.map((price) => price.replace('$', '$ ')).join(' - ')
    },
    linkForOrder() {
      return `/order/${this.reserveIdHotel}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/button-hover';

$reserve-width: 382px;
$reserve-height: 201px;
$button-width: 324px;
$button-height: 60px;

.reserve {
  max-width: $reserve-width;
  min-height: $reserve-height;
  padding: 30px;
  box-shadow: 0px 0px 16px rgba(194, 198, 204, 0.6);
  border-radius: 10px;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  &__price {
    padding-bottom: 27px;
    margin-bottom: 27px;
    border-bottom: 1px solid $card-bg-color;
  }
}
</style>

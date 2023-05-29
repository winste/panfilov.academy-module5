<template>
  <div class="reserve">
    <div v-text="formattedPrice" class="reserve__price"></div>
    <AppButtonReserve @click.prevent="reserveHotel" />
  </div>
</template>

<script>
import { useReserveStore } from '@/store/reserveStore'
import AppButtonReserve from '@/components/AppButtonReserve.vue'

export default {
  components: {
    AppButtonReserve
  },
  props: {
    id: String,
    name: String,
    address: String,
    price: Array,
    properties: Object,
    image: String
  },

  data() {
    return {
      store: useReserveStore(),
      reserveData: {
        id: this.id,
        name: this.name,
        address: this.address,
        price: this.price,
        properties: this.properties,
        image: this.image
      }
    }
  },

  computed: {
    formattedPrice() {
      return this.price.map((item) => item.replace('$', '$ ')).join(' - ')
    }
  },
  methods: {
    reserveHotel() {
      this.store.addReserve(this.reserveData)
      this.$router.push('/order')
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

<template>
  <div class="reserve">
    <div class="reserve__price" v-text="correctPrice"></div>
    <AppButtonReserve class="reserve__btn" @click.prevent="reserveHotel" />
  </div>
</template>

<script>
import { useReserveStore } from '@/store/reserveStore'
import formattedPrice from '@/helpers/formattedPrice'
import AppButtonReserve from '@/components/AppButtonReserve.vue'

export default {
  components: {
    AppButtonReserve,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    price: {
      type: Array,
      required: true,
    },
    properties: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
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
        image: this.image,
      },
    }
  },

  computed: {
    correctPrice() {
      return formattedPrice.addSpaceWithDash(this.price)
    },
  },

  methods: {
    reserveHotel() {
      this.store.addReserve(this.reserveData)
      this.$router.push('/order')
    },
  },
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
  padding: 30px 30px 30px 29px;
  box-shadow: 0px 0px 16px rgba(194, 198, 204, 0.6);
  border-radius: 10px;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  &__price {
    padding-bottom: 26px;
    margin-bottom: 27px;
    margin-left: 1px;
    border-bottom: 1px solid $card-bg-color;
  }
  &__btn {
    margin-right: 1px;
  }
}
</style>
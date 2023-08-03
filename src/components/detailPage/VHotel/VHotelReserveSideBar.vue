<template>
  <div class="reserve">
    <div class="reserve__price" v-text="correctPrice"></div>
    <AppButtonReserve class="reserve__btn" @click.prevent="reserveHotel" />
  </div>
</template>

<script>
import { useReserveStore } from '@/store/reserveStore'
import formattedPrice from '@/helpers/formattedPrice'
import AppButtonReserve from '@/components/general/AppButtonReserve.vue'

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
.reserve {
  max-width: 382px;
  min-height: 201px;
  padding: 30px 30px 30px 29px;
  box-shadow: 0px 0px 16px #c2c6cc99;
  border-radius: 10px;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  &__price {
    padding-bottom: 26px;
    margin-bottom: 27px;
    margin-left: 1px;
    border-bottom: 1px solid #e0e2e6;
  }
  &__btn {
    margin-right: 1px;
  }
}
</style>
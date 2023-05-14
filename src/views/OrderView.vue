<template>
  <main class="order">
    <VOrderForm />
    <VOrderHotel />
  </main>
</template>

<script>
import VOrderForm from '../components/VOrder/VOrderForm.vue'
import VOrderHotel from '../components/VOrder/VOrderHotel.vue'

export default {
  components: {
    VOrderForm,
    VOrderHotel
  }
}
</script>

<style lang="scss" scoped>
.order {
  display: flex;
  flex-wrap: wrap;
  gap: 65px;
  padding: 83px 82px 75px 68px;
  margin: 0 auto;
}
</style>

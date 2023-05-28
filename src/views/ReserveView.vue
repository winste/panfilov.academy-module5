<template>
  <main class="reserve">
    <VReserveForm />
    <VReserveHotel />
  </main>
</template>

<script>
import VReserveForm from '@/pages/ReservePage/VReserveForm/VReserveForm.vue'
import VReserveHotel from '@/pages/ReservePage/VReserveHotel/VReserveHotel.vue'

export default {
  components: {
    VReserveForm,
    VReserveHotel
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';

.reserve {
  @include flexbox-general($gap: 20px);
  justify-content: space-between;
  padding: 83px 82px 75px 68px;
  margin: 0 auto;
}
</style>

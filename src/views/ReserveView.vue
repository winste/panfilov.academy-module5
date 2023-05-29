<template>
  <main class="reserve">
    <VReserveForm class="reserve__form" />
    <VReserveHotel :hotelData="store.getReserve" class="reserve__preview" />
  </main>
</template>

<script>
import { useReserveStore } from '@/store/reserveStore'
import VReserveForm from '@/pages/ReservePage/VReserveForm/VReserveForm.vue'
import VReserveHotel from '@/pages/ReservePage/VReserveHotel/VReserveHotel.vue'

export default {
  components: {
    VReserveForm,
    VReserveHotel
  },
  data() {
    return {
      store: useReserveStore()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';

.reserve {
  @include flexbox-general($gap: 66px);
  justify-content: center;
  padding: 83px 82px 75px 68px;
  margin: 0 auto;
  &__preview {
    flex: 1;
    max-width: max-content;
    min-width: 380px;
    height: min-content;
  }
}
</style>

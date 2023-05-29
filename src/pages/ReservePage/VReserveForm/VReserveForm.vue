<template>
  <form class="form">
    <div class="form__wrapper">
      <div class="form__main">
        <VReserveFormInput
          inputType="text"
          inputPlaceholder="First name *"
          v-model="order.first_name"
          class="form__field"
        />
        <VReserveFormInput
          inputType="text"
          inputPlaceholder="Last name *"
          v-model="order.last_name"
          class="form__field form__field-last-name"
        />
        <VReserveFormInput
          inputType="text"
          inputPlaceholder="Info-1 *"
          v-model="order.info_1"
          class="form__field"
        />
        <VReserveFormInput
          inputType="text"
          inputPlaceholder="Info-2 *"
          v-model="order.info_2"
          class="form__field form__field-info-2"
        />
        <div class="form__field form__field-select">
          <VSelect
            :options="countries"
            color="#959595"
            weight="500"
            placeholder="Country *"
            v-model="order.country"
          />
        </div>

        <VReserveFormInput
          inputType="email"
          inputPlaceholder="Email address *"
          v-model="order.email"
          class="form__field form__field-email"
        />
      </div>

      <VReserveFormInput
        inputType="phone"
        inputPlaceholder="Phone number"
        v-model="order.phone"
        class="form__field form__field-phone"
      />
      <VReserveFormInput
        inputType="text"
        inputPlaceholder="Comment"
        v-model="order.comment"
        class="form__field form__field-comment"
      />
    </div>
    <AppButtonReserve @click.prevent="submitOrder" class="form__button" />
  </form>
</template>

<script>
import { api } from '@/api/api'
import { useReserveStore } from '@/store/reserveStore'
import AppButtonReserve from '@/components/AppButtonReserve.vue'
import VSelect from '@/components/VSelect.vue'
import VReserveFormInput from './VReserveFormInput.vue'
import sortByName from '@/helpers/sortByName'

export default {
  components: {
    VReserveFormInput,
    VSelect,
    AppButtonReserve
  },

  data() {
    return {
      countries: [],
      order: {
        first_name: '',
        last_name: '',
        info_1: '',
        info_2: '',
        country: '',
        email: '',
        phone: '',
        comment: ''
      },
      store: useReserveStore()
    }
  },

  async created() {
    const countries = await api.fetchData('/hotel/location').then((response) => response.data)
    this.countries = sortByName(countries)
  },

  methods: {
    submitOrder() {
      // api
      //   .postData('/order', this.order)
      //   .then((response) => {
      //     this.store.addReserve(response)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      console.log(this.order)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

$form-width: 670px;

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: $form-width;
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 13px;
  }
  &__field {
    min-width: 329px;
    color: $form-placeholder-color;
    border-bottom: 1px solid rgb(0, 0, 0);
    &-last-name,
    &-info-2,
    &-email {
      padding-left: 18px;
    }
    &-select {
      position: relative;
      padding: 12px;
      display: flex;
      align-items: center;
      &::before {
        position: absolute;
        content: '';
        right: 20px;
        bottom: 22px;
        width: 10px;
        height: 10px;
        border-top: 1px solid rgb(205, 205, 205);
        border-right: 1px solid rgb(205, 205, 205);
        transform: rotate(135deg);
      }
    }
    &-phone,
    &-comment {
      min-width: 100%;
    }
  }
  &__button {
    position: relative;
    left: 13px;
    align-self: end;
  }
}
</style>

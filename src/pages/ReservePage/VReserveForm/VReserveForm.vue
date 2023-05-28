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
          class="form__field"
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
          class="form__field"
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
          class="form__field"
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
    <AppButtonReserve @click.prevent="submitReserve" class="form__button" />
  </form>
</template>

<script>
import { api } from '@/api/api'
import AppButtonReserve from '@/components/AppButtonReserve.vue'
import VSelect from '@/components/VSelect.vue'
import VReserveFormInput from './VReserveFormInput.vue'
import sortByName from '@/helpers/sortByName'
import { useReserveStore } from '@/store/reserveStore'

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
    submitReserve() {
      // api
      //   .postData('/order', {
      //     first_name: `${this.order.first_name}`,
      //     last_name: `${this.order.last_name}`,
      //     info_1: `${this.order.info_1}`,
      //     info_2: `${this.order.info_2}`,
      //     country: `${this.order.country}`,
      //     email: `${this.order.email}`,
      //     phone: `${this.order.phone}`,
      //     comment: `${this.order.comment}`
      //   })
      //   .then((response) => {
      //     this.store.addReserve(response)
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
      console.log({
        first_name: `${this.order.first_name}`,
        last_name: `${this.order.last_name}`,
        info_1: `${this.order.info_1}`,
        info_2: `${this.order.info_2}`,
        country: `${this.order.country}`,
        email: `${this.order.email}`,
        phone: `${this.order.phone}`,
        comment: `${this.order.comment}`
      })
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
  &__main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__field {
    min-width: 329px;
    color: $form-placeholder-color;
    border-bottom: 1px solid rgb(0, 0, 0);
    &-select {
      position: relative;
      padding: 12px;
      display: flex;
      align-items: center;
      &::before {
        position: absolute;
        content: '';
        right: 12px;
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
    align-self: end;
  }
}
</style>

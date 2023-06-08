<template>
  <form @submit.prevent="submitOrder" class="form">
    <div class="form__wrapper">
      <div class="form__main">
        <VReserveFormInput
          type="text"
          placeholder="First name *"
          :error="condition('first_name')"
          :message="msg('first_name')"
          v-model="order.first_name"
          class="form__field"
        />

        <VReserveFormInput
          type="text"
          placeholder="Last name *"
          :error="condition('last_name')"
          :message="msg('last_name')"
          v-model="order.last_name"
          class="form__field form__field-last-name"
        />

        <VReserveFormInput
          type="text"
          placeholder="Info-1 *"
          :error="condition('info_1')"
          :message="msg('info_1')"
          v-model="order.info_1"
          class="form__field"
        />

        <VReserveFormInput
          type="text"
          placeholder="Info-2 *"
          :error="condition('info_2')"
          :message="msg('info_2')"
          v-model="order.info_2"
          class="form__field form__field-info-2"
        />

        <div class="form__field">
          <div class="form__field-select">
            <VSelect
              :options="countries"
              color="#959595"
              weight="500"
              placeholder="Country *"
              v-model="order.country"
            />
          </div>
          <span v-if="condition('country')" v-text="msg('country')" class="form__field-select-msg">
          </span>
        </div>

        <VReserveFormInput
          type="email"
          placeholder="Email address *"
          :error="condition('email')"
          :message="msg('email')"
          v-model="order.email"
          class="form__field form__field-email"
        />
      </div>

      <VReserveFormInput
        type="phone"
        placeholder="Phone number"
        :error="condition('phone')"
        message="Incorrect format"
        v-model="order.phone"
        class="form__field form__field-phone"
      />

      <VReserveFormInput
        type="text"
        placeholder="Comment"
        v-model="order.comment"
        class="form__field form__field-comment"
      />
    </div>
    <AppButtonReserve class="form__button" />
  </form>
</template>

<script>
import { api } from '@/api/api'
import { useReserveStore } from '@/store/reserveStore'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
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
      v$: useVuelidate(),
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

  validations() {
    return {
      order: {
        first_name: { required },
        last_name: { required },
        info_1: { required },
        info_2: { required },
        country: { required },
        email: { required, email }
      }
    }
  },

  async created() {
    const countries = await api.fetchData('/hotel/location').then((response) => response.data)
    this.countries = sortByName(countries)
  },

  methods: {
    condition(name) {
      return this.v$.$errors.map((item) => item.$property).includes(name)
    },
    msg(name) {
      if (this.v$.$errors.length) {
        const index = this.v$.$errors.map((item) => item.$property).indexOf(name)
        return index != -1 ? this.v$.$errors[index].$message : false
      }
    },

    async submitOrder() {
      const result = await this.v$.$validate()

      if (result) {
        api
          .postData('/order', this.order)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-general';
@import '@/assets/scss/mixins/flexbox-direction';
@import '@/assets/scss/mixins/reserve-input';

$form-width: 670px;
$input-width: 329px;
$input-height: 49px;

.form {
  @include flexbox-direction($direction: column, $gap: 24px);
  max-width: $form-width;
  &__wrapper {
    @include flexbox-direction($direction: column, $gap: 12px);
  }
  &__main {
    @include flexbox-general($gap: 10px 0);
    justify-content: space-between;
  }
  &__item {
    @include flexbox-direction($direction: column, $gap: 0);
  }
  &__field {
    &-select {
      position: relative;
      @include flexbox-general();
      align-items: center;
      @include reserve-input($width: $input-width, $height: $input-height);
      &-msg {
        padding: 5px 10px;
        font-size: 10px;
        color: red;
      }
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

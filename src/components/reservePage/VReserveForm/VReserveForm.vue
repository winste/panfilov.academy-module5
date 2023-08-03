<template>
  <form class="form" @submit.prevent="submitOrder">
    <div class="form__fields">
      <div class="form__main">
        <VReserveFormInput
          v-model="order.first_name"
          type="text"
          placeholder="First name *"
          :error="hasErrorMsg('first_name')"
          :message="msg('first_name')"
          class="form__first-name"
        />

        <VReserveFormInput
          v-model="order.last_name"
          type="text"
          placeholder="Last name *"
          :error="hasErrorMsg('last_name')"
          :message="msg('last_name')"
          class="form__last-name"
        />

        <VReserveFormInput
          v-model="order.info_1"
          type="text"
          placeholder="Info-1 *"
          :error="hasErrorMsg('info_1')"
          :message="msg('info_1')"
          class="form__info-1"
        />

        <VReserveFormInput
          v-model="order.info_2"
          type="text"
          placeholder="Info-2 *"
          :error="hasErrorMsg('info_2')"
          :message="msg('info_2')"
          class="form__info-2"
        />

        <div class="form__select">
          <VSelect
            v-model="order.country"
            :options="countries"
            color="#959595"
            weight="500"
            placeholder="Country *"
          />

          <span v-if="hasErrorMsg('country')" class="form__select-msg" v-text="msg('country')">
          </span>
        </div>

        <VReserveFormInput
          v-model="order.email"
          type="email"
          placeholder="Email address *"
          :error="hasErrorMsg('email')"
          :message="msg('email')"
          class="form__email"
        />
      </div>

      <VReserveFormInput
        v-model="order.phone"
        type="phone"
        placeholder="Phone number"
        :error="hasErrorMsg('phone')"
        message="Incorrect format"
        class="form__phone"
      />

      <VReserveFormInput
        v-model="order.comment"
        type="text"
        placeholder="Comment"
        class="form__comment"
      />
    </div>
    <AppButtonReserve class="form__button" />
    <AppErrorMessage v-if="error" :msg="error" />
    <AppModal ref="modal" text="Order successfully sent!" />
  </form>
</template>

<script>
import { api } from '@/api/api'
import { useReserveStore } from '@/store/reserveStore'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import AppButtonReserve from '@/components/general/AppButtonReserve.vue'
import VSelect from '@/components/general/VSelect.vue'
import VReserveFormInput from './VReserveFormInput.vue'
import sortByName from '@/helpers/sortByName'
import AppErrorMessage from '@/components/general/AppErrorMessage.vue'
import AppModal from '@/components/general/AppModal.vue'

export default {
  components: {
    VReserveFormInput,
    VSelect,
    AppButtonReserve,
    AppErrorMessage,
    AppModal,
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
        comment: '',
      },
      store: useReserveStore(),
      error: null,
    }
  },

  // метод валидатора
  validations() {
    return {
      order: {
        first_name: { required },
        last_name: { required },
        info_1: { required },
        info_2: { required },
        country: { required },
        email: { required, email },
      },
    }
  },

  async created() {
    const countries = await api.fetchData('/hotel/location').then((response) => response.data)
    this.countries = sortByName(countries)
  },

  methods: {
    // для проверки, есть ли в списке ошибок валидатора неоходимое поле для отображения сообщения
    hasErrorMsg(name) {
      return this.v$.$errors.map((item) => item.$property).includes(name)
    },
    // находит необходимое поле в списке ошибок и возвращает сообщение
    msg(name) {
      if (this.hasErrorMsg(name)) {
        const index = this.v$.$errors.map((item) => item.$property).indexOf(name)
        return this.v$.$errors[index].$message
      }
    },

    async submitOrder() {
      const result = await this.v$.$validate()

      if (result) {
        api
          .postData('/order', this.order)
          .then((response) => {
            this.orderSuccess()
            this.$refs.modal.showModal()
            console.log(response)
          })
          .catch((error) => {
            this.orderError()
            this.error = error.message
          })
      }
    },

    orderSuccess() {
      ym(94263519, 'reachGoal', 'website__order-success')
    },

    orderError() {
      ym(94263519, 'reachGoal', 'website__order-error')
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  @include flexbox($direction: column, $gap: 24px);
  max-width: 670px;
  &_fields {
    @include flexbox($direction: column, $gap: 10px);
  }
  &__main {
    @include flexbox($justify-content: space-between, $gap: 10px 0);
  }
  &__select {
    position: relative;
    @include flexbox;
    align-items: center;
    @include placeholder($color: #959595, $weight: 500);
    min-width: 329px;
    height: 49px;
    padding: 15px;
    border-bottom: 1px solid #000000;
    &-msg {
      padding-top: 15px;
      font-size: 10px;
      color: #ff0000;
    }
    &::before {
      position: absolute;
      content: '';
      right: 20px;
      bottom: 22px;
      width: 10px;
      height: 10px;
      border-top: 1px solid #cdcdcd;
      border-right: 1px solid #cdcdcd;
      transform: rotate(135deg);
    }
  }
  &__phone,
  &__comment {
    min-width: 100%;
  }

  &__button {
    position: relative;
    left: 13px;
    align-self: end;
  }
}

@media (max-width: 992px) {
  .form {
    min-width: 100%;
    padding: 0 30px;
    &__fields {
      display: block;
    }
    &__main {
      display: block;
    }
    &__select {
      min-width: 100%;
    }
  }
}
</style>
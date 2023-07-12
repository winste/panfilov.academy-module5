<template>
  <form class="form" @submit.prevent="submitOrder">
    <div class="form__wrapper">
      <div class="form__main">
        <VReserveFormInput
          v-model="order.first_name"
          type="text"
          placeholder="First name *"
          :error="hasErrorMsg('first_name')"
          :message="msg('first_name')"
          class="form__field"
        />

        <VReserveFormInput
          v-model="order.last_name"
          type="text"
          placeholder="Last name *"
          :error="hasErrorMsg('last_name')"
          :message="msg('last_name')"
          class="form__field form__field-last-name"
        />

        <VReserveFormInput
          v-model="order.info_1"
          type="text"
          placeholder="Info-1 *"
          :error="hasErrorMsg('info_1')"
          :message="msg('info_1')"
          class="form__field"
        />

        <VReserveFormInput
          v-model="order.info_2"
          type="text"
          placeholder="Info-2 *"
          :error="hasErrorMsg('info_2')"
          :message="msg('info_2')"
          class="form__field form__field-info-2"
        />

        <div class="form__field">
          <div class="form__field-select">
            <VSelect
              v-model="order.country"
              :options="countries"
              color="#959595"
              weight="500"
              placeholder="Country *"
            />
          </div>
          <span
            v-if="hasErrorMsg('country')"
            class="form__field-select-msg"
            v-text="msg('country')"
          >
          </span>
        </div>

        <VReserveFormInput
          v-model="order.email"
          type="email"
          placeholder="Email address *"
          :error="hasErrorMsg('email')"
          :message="msg('email')"
          class="form__field form__field-email"
        />
      </div>

      <VReserveFormInput
        v-model="order.phone"
        type="phone"
        placeholder="Phone number"
        :error="hasErrorMsg('phone')"
        message="Incorrect format"
        class="form__field form__field-phone"
      />

      <VReserveFormInput
        v-model="order.comment"
        type="text"
        placeholder="Comment"
        class="form__field form__field-comment"
      />
    </div>
    <AppButtonReserve class="form__button" />
    <AppErrorMessage v-if="error" :msg="error" />
    <AppModal ref="modal" text="Application successfully sent!" />
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
import AppErrorMessage from '@/components/AppErrorMessage.vue'
import AppModal from '@/components/AppModal.vue'

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
    @include flexbox-direction($direction: column, $gap: 10px);
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
        color: rgb(255, 0, 0);
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

@media (max-width: 820px) {
  .form {
    min-width: 100%;
    padding: 0 30px;
    &__wrapper {
      display: block;
    }
    &__main {
      display: block;
    }
    &__field {
      &-select {
        min-width: 100%;
      }
    }
  }
}
</style>











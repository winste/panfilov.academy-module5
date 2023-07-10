<template>
  <div class="filter">
    <h2 class="filter__title">Find</h2>
    <form class="filter__form">
      <div class="filter__input filter__input-select">
        <label class="filter__label"
          >Location
          <VSelect
            id="select"
            v-model="filter.location"
            :options="countries"
            placeholder="Which city do you prefer?"
          />
        </label>
      </div>

      <span class="filter__delimiter"></span>

      <div class="filter__input filter__input-date-in">
        <label class="filter__label"
          >Check In
          <VDateInput v-model="filter.checkIn" placeholder="Add Dates" />
        </label>
      </div>

      <span class="filter__delimiter"></span>

      <div class="filter__input filter__input-date-out">
        <label class="filter__label"
          >Check Out
          <VDateInput v-model="filter.checkOut" placeholder="Add Dates" />
        </label>
      </div>

      <span class="filter__delimiter"></span>

      <div class="filter__input filter__input-number">
        <label class="filter__label"
          >Guests
          <VNumberInput v-model="filter.guest" placeholder="Add Guests" />
        </label>
      </div>

      <AppButtonSubmit
        size="54px"
        :icon="icon"
        class="filter__button"
        @click.prevent="searchHotels"
      />
    </form>
    <AppErrorMessage v-show="error" :msg="error" />
  </div>
</template>

<script>
import { api } from '@/api/api.js'
import { useHotelStore } from '@/store/hotelStore'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import Search from '@/assets/images/icons/Search.svg'
import VSelect from '@/components/VSelect.vue'
import VDateInput from '@/components/VInputDate.vue'
import VNumberInput from '@/components/VInputNumber.vue'
import AppButtonSubmit from '@/components/AppButtonSubmit.vue'
import sortByName from '@/helpers/sortByName'
import AppErrorMessage from '@/components/AppErrorMessage.vue'

const dateFormatted = (date) => {
  if (date) return new Date(date).toISOString()
}

export default {
  components: {
    VSelect,
    VDateInput,
    VNumberInput,
    AppButtonSubmit,
    AppErrorMessage,
  },

  data() {
    return {
      v$: useVuelidate(),
      icon: Search,
      countries: [],
      filter: {
        location: '',
        checkIn: '',
        checkOut: '',
        guest: '',
      },
      store: useHotelStore(),
      error: null,
    }
  },

  validations() {
    return {
      filter: {
        location: { required },
      },
    }
  },

  async created() {
    try {
      const countries = await api.fetchData('/hotel/location').then((response) => response.data)
      this.countries = sortByName(countries)
    } catch (error) {
      this.error = error.message
    }
  },

  methods: {
    dateFormat(value) {
      return dateFormatted(value)
    },

    async searchHotels() {
      this.store.$reset()
      const result = await this.v$.$validate()

      // если валидатор возвращает true, то пост отправляется на сервер
      if (result) {
        api
          .postData('/hotel/filter', {
            location: `${this.filter.location}`,
            checkIn: `${this.dateFormat(this.filter.checkIn)}`,
            checkOut: `${this.dateFormat(this.filter.checkOut)}`,
            guest: `${this.filter.guest ? this.filter.guest : 0}`,
          })
          .then((response) => {
            this.store.addHotels(response.data)
            this.$router.push('/hotel/search')
          })
          .catch((error) => {
            this.error = error.message
            console.log(error)
          })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/placeholder';
@import '@/assets/scss/mixins/flexbox-general';
@import '@/assets/scss/mixins/flexbox-direction';

$filter-color: rgb(255, 255, 255);
$delimiter-color: rgb(221, 221, 221);

.filter {
  &__form {
    @include flexbox-general($wrap: nowrap);
    padding: 11px 8px 5px 8px;
    background-color: $filter-color;
    border-radius: 35px;
  }
  &__title {
    display: block;
    padding-bottom: 22px;
    padding-left: 30px;
    color: $main-font-color;
    font-weight: 700;
    font-size: 40px;
    text-transform: uppercase;
  }
  &__input {
    position: relative;
    @include flexbox-direction($direction: column, $gap: 0px);
    justify-content: center;
    &-select {
      min-width: 258px;
      max-width: 232px;
      min-height: 24px;
      padding-left: 22px;
      margin-right: 28px;
    }
    &-date-in {
      max-width: 133px;
      margin-right: 7px;
    }
    &-date-out {
      max-width: 139px;
      margin-right: 26px;
    }
    &-number {
      width: 127px;
    }
  }
  &__label {
    @include flexbox-direction($direction: column, $gap: 2.1px);
    font-weight: 600;
    font-size: 12px;
    color: $main-font-color;
  }
  &__button {
    position: relative;
    top: -2px;
  }
  &__delimiter {
    position: relative;
    top: 12px;
    right: 15px;
    border-right: 1px solid $delimiter-color;
    width: 2px;
    height: 30px;
  }
}

@media (max-width: 840px) {
  .filter {
    &__form {
      flex-wrap: wrap;
      padding: 20px 40px;
    }
    &__title {
      text-transform: uppercase;
    }
    &__input {
      &-select,
      &-date-in,
      &-date-out,
      &-number {
        min-width: 100%;
        border-bottom: 1px solid $delimiter-color;
        padding: 10px 0;
        margin-right: 0;
      }
      &-select {
        padding: 10px 0;
      }
      &-number {
        min-width: auto;
        margin-right: 20px;
        flex: 1;
      }
    }
    &__delimiter {
      display: none;
    }
    &__button {
      margin-top: 15px;
    }
  }
}
</style>











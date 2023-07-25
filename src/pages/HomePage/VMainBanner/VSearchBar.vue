<template>
  <div class="filter">
    <h2 class="filter__title">Find</h2>
    <form class="filter__form">
      <div class="filter__input filter__select">
        <label class="filter__label">Location</label>
        <VSelect
          id="select"
          v-model="filter.location"
          :options="countries"
          placeholder="Which city do you prefer?"
          @update:modelValue="selectLocation"
        />
      </div>

      <span class="filter__delimiter"></span>

      <div class="filter__input filter__date-in">
        <label class="filter__label">Check In</label>
        <VInputDate
          v-model="filter.checkIn"
          placeholder="Add Dates"
          @update:modelValue="selectDateIn"
        />
      </div>

      <span class="filter__delimiter"></span>

      <div class="filter__input filter__date-out">
        <label class="filter__label">Check Out</label>
        <VInputDate
          v-model="filter.checkOut"
          placeholder="Add Dates"
          @update:modelValue="selectDateOut"
        />
      </div>

      <span class="filter__delimiter"></span>

      <div class="filter__input filter__number">
        <label class="filter__label">Guests</label>
        <VNumberInput
          v-model="filter.guest"
          placeholder="Add Guests"
          @update:modelValue="selectGuests"
        />
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
import VInputDate from '@/components/VInputDate.vue'
import VNumberInput from '@/components/VInputNumber.vue'
import AppButtonSubmit from '@/components/AppButtonSubmit.vue'
import sortByName from '@/helpers/sortByName'
import AppErrorMessage from '@/components/AppErrorMessage.vue'

const dateUTC = (date) => {
  if (date) return new Date(date).toISOString()
}

export default {
  components: {
    VSelect,
    VInputDate,
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
    dateFormatted(value) {
      return dateUTC(value)
    },

    async searchHotels() {
      this.store.$reset()
      const result = await this.v$.$validate()

      // если валидатор возвращает true, то запрос отправляется на сервер
      if (result) {
        api
          .postData('/hotel/filter', {
            location: `${this.filter.location}`,
            checkIn: `${this.dateFormatted(this.filter.checkIn)}`,
            checkOut: `${this.dateFormatted(this.filter.checkOut)}`,
            guest: `${this.filter.guest ? this.filter.guest : 0}`,
          })
          .then((response) => {
            this.store.addHotels(response.data)
            this.$router.push('/hotel/search')
            this.redirectSearch()
          })
          .catch((error) => {
            this.error = error.message
            console.log(error)
          })
      }
    },

    selectLocation() {
      ym(94263519, 'reachGoal', 'website__select-one')
    },

    selectDateIn() {
      ym(94263519, 'reachGoal', 'website__select-two')
    },

    selectDateOut() {
      ym(94263519, 'reachGoal', 'website__select-three')
    },

    selectGuests() {
      ym(94263519, 'reachGoal', 'website__select-four')
    },

    redirectSearch() {
      ym(94263519, 'reachGoal', 'website__redirect')
    },
  },
}
</script>

<style lang="scss" scoped>
.filter {
  &__form {
    @include flexbox($wrap: nowrap);
    padding: 11px 8px 5px 8px;
    background-color: #ffffff;
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
  &__label {
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 3px;
    color: $main-font-color;
  }
  &__input {
    position: relative;
    @include flexbox($direction: column, $justify-content: center, $gap: 0px);
  }
  &__select {
    min-width: 258px;
    max-width: 232px;
    min-height: 24px;
    padding-left: 22px;
    margin-right: 28px;
  }
  &__date-in {
    max-width: 133px;
    margin-right: 7px;
  }
  &__date-out {
    max-width: 139px;
    margin-right: 26px;
  }
  &__number {
    width: 127px;
    overflow: hidden;
  }
  &__button {
    position: relative;
    top: -2px;
  }
  &__delimiter {
    position: relative;
    top: 12px;
    right: 15px;
    border-right: 1px solid #dddddd;
    width: 2px;
    height: 30px;
  }
}

@media (max-width: 992px) {
  .filter {
    &__form {
      flex-wrap: wrap;
      padding: 20px 40px;
      max-width: 600px;
    }
    &__title {
      text-transform: uppercase;
    }
    &__select,
    &__date-in,
    &__date-out,
    &__number {
      min-width: 100%;
      border-bottom: 1px solid #dddddd;
      padding: 10px 0;
      margin-right: 0;
    }
    &__select {
      padding: 10px 0;
    }
    &__number {
      min-width: auto;
      margin-right: 20px;
      flex: 1;
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
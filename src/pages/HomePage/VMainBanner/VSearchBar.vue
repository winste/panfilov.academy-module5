<template>
  <h2 class="form-banner__title">Find</h2>
  <form class="form-banner">
    <div class="form-banner__input form-banner__input-select">
      <VSelect
        :options="countries"
        color="#C2C6CC"
        weight="600"
        label="Location"
        placeholder="Which city do you prefer?"
        v-model="filter.location"
      />
    </div>

    <div class="form-banner__input form-banner__input-date-in">
      <VDateInput label="Check in" placeholder="Add Dates" v-model="filter.checkIn" />
    </div>

    <div class="form-banner__input form-banner__input-date-out">
      <VDateInput label="Check out" placeholder="Add Dates" v-model="filter.checkOut" />
    </div>

    <div class="form-banner__input form-banner__input-number">
      <VNumberInput label="Guests" placeholder="Add Guests" v-model="filter.guest" />
    </div>

    <AppButtonSubmit
      @click.prevent="searchHotels"
      size="54px"
      :icon="icon"
      class="form-banner__button"
    />
  </form>
</template>

<script>
import { api } from '@/api/api.js'
import { useHotelStore } from '@/store/hotelStore'
import Search from '@/assets/images/icons/Search.svg'
import VSelect from '@/components/VSelect.vue'
import VDateInput from '@/components/VInputDate.vue'
import VNumberInput from '@/components/VInputNumber.vue'
import AppButtonSubmit from '@/components/AppButtonSubmit.vue'
import sortByName from '@/helpers/sortByName'

const dateFormatted = (date) => {
  if (date) return new Date(date).toISOString()
}

export default {
  components: {
    VSelect,
    VDateInput,
    VNumberInput,
    AppButtonSubmit
  },

  data() {
    return {
      icon: Search,
      countries: [],
      filter: {
        location: '',
        checkIn: '',
        checkOut: '',
        guest: ''
      },
      store: useHotelStore()
    }
  },
  async created() {
    const countries = await api.fetchData('/hotel/location').then((response) => response.data)
    this.countries = sortByName(countries)
  },

  computed: {
    dateFormat() {
      return dateFormatted(this.filter.checkIn)
    },
    dateFormat2() {
      return dateFormatted(this.filter.checkOut)
    }
  },
  methods: {
    searchHotels() {
      api
        .postData('/hotel/filter', {
          location: `${this.filter.location}`,
          checkIn: `${this.dateFormat}`,
          checkOut: `${this.dateFormat2}`,
          guest: `${this.filter.guest ? this.filter.guest : 0}`
        })
        .then((response) => {
          this.store.addHotels(response.data)
        })
        .catch((error) => {
          console.log(error)
        })

      this.$router.push('/hotel/search')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/placeholder';

$form-banner-color: rgb(255, 255, 255);
$delimiter-color: rgb(221, 221, 221);

.form-banner {
  display: flex;
  padding: 11px 8px 5px 8px;
  background-color: $form-banner-color;
  border-radius: 35px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-select {
      width: 260px;
      min-height: 24px;
      padding-left: 22px;
      margin-right: 28px;
      margin-top: 3.5px;
    }
    &-date-in {
      max-width: 135px;
      margin-right: 7px;
    }
    &-date-out {
      max-width: 140px;
      margin-right: 26px;
    }
    &-number {
      width: 127px;
    }
    &:not(:first-child):before {
      content: '';
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: $delimiter-color;
      top: 50%;
      right: 100%;
      transform: rotate(90deg);
    }
  }
  &__button {
    position: relative;
    top: -2px;
    right: -1px;
  }
}

.label {
  font-size: 12px;
  font-weight: 600;
}
</style>

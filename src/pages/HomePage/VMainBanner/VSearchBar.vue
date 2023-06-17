<template>
  <h2 class="filter__title">Find</h2>
  <form class="filter">
    <div class="filter__input filter__input-select">
      <label for="select" class="filter__label">Location</label>
      <VSelect
        :options="countries"
        color="#C2C6CC"
        weight="600"
        placeholder="Which city do you prefer?"
        v-model="filter.location"
      />
    </div>

    <span class="filter__delimiter"></span>

    <div class="filter__input filter__input-date-in">
      <label for="date" class="filter__label">Check In</label>
      <VDateInput placeholder="Add Dates" v-model="filter.checkIn" />
    </div>

    <span class="filter__delimiter"></span>

    <div class="filter__input filter__input-date-out">
      <label for="date" class="filter__label">Check Out</label>
      <VDateInput placeholder="Add Dates" v-model="filter.checkOut" />
    </div>

    <span class="filter__delimiter"></span>

    <div class="filter__input filter__input-number">
      <label for="number" class="filter__label">Guests</label>
      <VNumberInput placeholder="Add Guests" v-model="filter.guest" />
    </div>

    <AppButtonSubmit
      @click.prevent="searchHotels"
      size="54px"
      :icon="icon"
      class="filter__button"
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
      this.store.$reset()
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
@import '@/assets/scss/mixins/flexbox-direction';

$filter-color: rgb(255, 255, 255);
$delimiter-color: rgb(221, 221, 221);

.filter {
  display: flex;
  padding: 11px 8px 5px 8px;
  background-color: $filter-color;
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
    @include flexbox-direction($direction: column, $gap: 0px);
    justify-content: center;
    &-select {
      width: 260px;
      min-height: 24px;
      padding-left: 22px;
      margin-right: 28px;
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
  }
  &__label {
    margin-bottom: 3.5px;
    font-weight: 600;
    font-size: 12px;
    color: $main-font-color;
  }
  &__button {
    position: relative;
    top: -2px;
    right: -1px;
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
</style>

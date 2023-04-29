<template>
  <h2 class="form__title">Find</h2>
  <form class="form">
    <div class="form__input form__input-select">
      <VSelect label="Location" placeholder="Which city do you prefer?" :options="countries" />
    </div>

    <div class="form__input form__input-date-in">
      <VDateInput label="Check in" placeholder="Add Dates" />
    </div>

    <div class="form__input form__input-date-out">
      <VDateInput label="Check out" placeholder="Add Dates" />
    </div>

    <div class="form__input form__input-number">
      <VNumberInput label="Guests" placeholder="Add Guests" />
    </div>

    <VButtonSubmit :btnSize="54" :btnIcon="icon" class="form__button" />
  </form>
</template>

<script>
import { api } from '@/api/api.js'
import Search from '@/assets/images/icons/Search.svg'
import VSelect from './VSelect.vue'
import VDateInput from './VDateInput.vue'
import VNumberInput from './VNumberInput.vue'
import VButtonSubmit from './VButtonSubmit.vue'

export default {
  components: {
    VSelect,
    VDateInput,
    VNumberInput,
    VButtonSubmit
  },

  data() {
    return {
      countries: [],
      icon: Search
    }
  },
  async mounted() {
    const countryList = await api.fetchData('/hotel/location').then((response) => response.data)
    this.countries = countryList.map((country) => country.name).sort((a, b) => a.localeCompare(b))
  },
  methods: {
    addDate() {
      this.type = 'date'
    }
  }
}
</script>

<style lang="scss">
.form {
  display: flex;
  padding: 11px 8px 5px 8px;
  background-color: white;
  border-radius: 35px;
  &__title {
    display: block;
    padding-bottom: 22px;
    padding-left: 30px;
    color: rgba(72, 72, 72, 1);
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
      max-width: 260px;
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
      max-width: 127px;
    }
    &:not(:first-child):before {
      content: '';
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: #dddddd;
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

<template>
  <div class="form-wrapper">
    <h2 class="form__title">Find</h2>
    <form class="form">
      <div class="form__input form__input-select">
        <VSelect label="Location" placeholder="Which city do you prefer?" :options="countries" />
      </div>

      <div class="form__input form__input-date">
        <VDateInput label="Check in" placeholder="AddDates" />
      </div>

      <div class="form__input form__input-date">
        <VDateInput label="Check out" placeholder="AddDates" />
      </div>

      <div class="form__input form__input-number">
        <VNumberInput label="Guests" placeholder="Add Guests" />
      </div>

      <VButton type="submit">
        <VIcon :nameIcon="icon" />
      </VButton>
    </form>
  </div>
</template>

<script>
import { api } from '@/api/api.js'
import VIcon from './VIcon.vue'
import SearchIcon from '@/assets/images/SearchIcon.svg'
import VSelect from './VSelect.vue'
import VDateInput from './VDateInput.vue'
import VNumberInput from './VNumberInput.vue'
import VButton from './VButton.vue'

export default {
  components: {
    VIcon,
    VSelect,
    VDateInput,
    VNumberInput,
    VButton
  },

  data() {
    return {
      countries: [],
      icon: SearchIcon
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
.form-wrapper {
  z-index: 111;
  padding-bottom: 75px;
}

.form {
  display: flex;
  gap: 20px;
  padding: 8px;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 35px;
  &__title {
    display: block;
    padding-bottom: 17px;
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
    padding-left: 16px;
    &-select {
      max-width: 250px;
      padding-left: 22px;
    }
    &-date,
    &-number {
      max-width: 138px;
    }
    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 0;
      border: 0.5px solid #dddddd;
      top: 50%;
      left: 100%;
      transform: rotate(90deg);
    }
    &:last-child {
      background-color: aqua;
    }
  }
}

.label {
  font-size: 12px;
  font-weight: 600;
}
</style>

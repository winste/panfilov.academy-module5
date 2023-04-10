<template lang="">
  <label
    for="locationInput"
    class="form__label"
  >
    location
    <select
      id="locationInput"
      class="form__select"
    >
      <option
        disabled
        selected
        value=""
        class="form__select-option"
      >
        Which city do you prefer?
      </option>
      <option
        v-for="country in countries"
        :key="country.id"
        :value="country.name"
      >
        {{ country.name }}
      </option>
    </select>
  </label>
</template>

<script>
import { api } from '@/api/api.js'
import SearchIcon from '@/assets/images/SearchIcon.svg';

export default {
  data() {
    return {
      countries: '',
      src: SearchIcon
    }
  },
  async mounted() {
    await api.fetchData("/hotel/location")
        .then(response => this.countries = response.data)
  },
  methods: {
    addDate() {
      this.type = 'date'  
    }
  },
}
</script>

<style lang="scss" scoped>
input[value="0000-00-00"]::-webkit-datetime-edit {
     color: transparent; 
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 1px;
  text-overflow: '';
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
}


.form-wrapper {
  z-index: 111;
  padding-bottom: 75px;
}

.form {
  display: flex;
  gap: 20px;
  padding: 20px 30px;
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

  &__label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
    padding-left: 15px;
    border-left: 1px solid rgba(221, 221, 221, 1);

    &:first-child {
      padding-left: 0;
      border-left: none;
    }
  }
  &__select {
    max-width: 250px;
    padding-top: 3px;
    background-color: transparent;
  }
}

</style>

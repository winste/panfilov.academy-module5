<template>
  <div class="form-wrapper">
    <h2 class="form__title">
      Find
    </h2>
    <form class="form">
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

      <label
        for="dateIn"
        class="form__label"
      >
        Check In

        <input
          id="dateIn"
          type="date"
          name="location"
          value=""
          placeholder="Add Dates"
          class="form__date"
        >
      </label>

      <label
        for="dateOut"
        class="form__label"
      >
        Check Out
        <input
          id="dateOut"
          type="date"
          name="location"
          value=""
          placeholder="Add Dates"
          class="form__date"
        >
      </label>

      <label
        for="dateOut"
        class="form__label"
      >
        Guests
        <input
          id="dateOut"
          type="text"
          name="location"
          value=""
          placeholder="Add Guests"
          class="form__date"
        >
      </label>

      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      countries: ''
    }
  },
  async mounted() {
    // await fetch('https://module5.7t33n.ru/hotel/location').then(res => res.json()).then(data => this.countries = data)
    // console.log(this.countries);
  }
}
</script>

<style lang="scss">

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}

.form-wrapper {
  z-index: 111;
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
  &__select{
    max-width: 250px;
    font-family: 'Montserrat';
    font-size: 14px;
    color: rgba(194, 198, 204, 1);
    font-weight: 600;
    padding-top: 3px;
    background-color: transparent;
  }
}
</style>
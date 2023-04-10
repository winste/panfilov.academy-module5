<template>
  <div class="form-wrapper">
    <h2 class="form__title">Find</h2>
    <form class="form">
      <label for="locationInput" class="form__label">
        location
        <select id="locationInput" class="form__select">
          <option disabled selected value="" class="form__select-option">
            Which city do you prefer?
          </option>
          <option v-for="country in countries" :key="country.id" :value="country.name">
            {{ country.name }}
          </option>
        </select>
      </label>

      <label for="dateIn" class="form__label">
        Check In

        <input
          id="dateIn"
          type="date"
          name="location"
          value="Add Dates"
          placeholder="Add Dates"
          class="form__date"
        />
      </label>

      <label for="dateOut" class="form__label">
        Check Out
        <input
          id="dateOut"
          type="date"
          name="location"
          value="YYYY-MM-DD"
          placeholder="Add Dates"
          class="form__date"
        />
      </label>

      <label for="guestNumber" class="form__label">
        Guests
        <input
          id="guestNumber"
          type="number"
          min="1"
          max="10"
          name="guestNumber"
          value="Guests"
          placeholder="Add Guests"
          class="form__date"
        />
      </label>

      <button type="submit" class="button">
        <VIcon :nameIcon="icon" />
      </button>
    </form>
  </div>
</template>

<script>
import { api } from "@/api/api.js";
import SearchIcon from "@/assets/images/SearchIcon.svg";
import VIcon from "./VIcon.vue";

export default {
  components: {
    SearchIcon,
    VIcon
  },

  data() {
    return {
      countries: "",
      icon: SearchIcon,
    };
  },
  async mounted() {
    const countryList = await api
      .fetchData("/hotel/location")
      .then((response) => response.data);
    this.countries = countryList.sort((a, b) => a.name.localeCompare(b.name))
  },
  methods: {
    addDate() {
      this.type = "date";
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
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

  &__label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
    padding-left: 15px;
    border-left: 1px solid rgba(221, 221, 221, 1);

    &:first-child {
      border-left: none;
    }
  }
  &__select {
    max-width: 250px;
    padding-top: 3px;
    background-color: transparent;
    // &-option{
    //   font-family: 'Montserrat';
    //   font-size: 14px;
    //   color: rgba(194, 198, 204, 1);
    //   font-weight: 600;
    // }
  }
}

.button {
  width: 54px;
  height: 54px;
  background-color: rgba(72, 72, 72, 1);
  border-radius: 50%;
  cursor: pointer;
}
</style>

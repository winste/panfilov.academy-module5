<template>
  <div class="form-wrapper">
    <h2 class="form__title">Find</h2>
    <form class="form">
      <div class="form__select">
        <VSelect
          label="Location"
          placeholder="Which city do you prefer?"
          :options="countries"
        />
      </div>

      <div class="date">
        <VDateInput label="DateIn" />
      </div>

      <div class="date">
        <VDateInput label="DateOut" />
      </div>

      <div class="number">
        <VNumberInput label="Guests" />
      </div>
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
import VSelect from "./VSelect.vue";
import VDateInput from "./VDateInput.vue";
import VNumberInput from "./VNumberInput.vue";

export default {
  components: {
    SearchIcon,
    VIcon,
    VSelect,
    VDateInput,
    VNumberInput,
  },

  data() {
    return {
      countries: [],
      icon: SearchIcon,
    };
  },
  async mounted() {
    const countryList = await api
      .fetchData("/hotel/location")
      .then((response) => response.data);
    this.countries = countryList
      .map((country) => country.name)
      .sort((a, b) => a.localeCompare(b));
  },
  methods: {
    addDate() {
      this.type = "date";
    },
  },
};
</script>

<style lang="scss" scoped>
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
}

.button {
  width: 54px;
  height: 54px;
  background-color: rgba(72, 72, 72, 1);
  border-radius: 50%;
  cursor: pointer;
}
</style>

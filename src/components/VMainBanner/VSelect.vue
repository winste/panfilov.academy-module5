<template>
  <label v-text="label" for="select" class="select-title label"></label>
  <v-select class="select" :options="this.countries" :placeholder="placeholder" />
</template>

<script>
import { api } from '@/api/api.js'
import 'vue-select/dist/vue-select.css'

export default {
  props: {
    label: String,
    placeholder: String
  },
  data() {
    return {
      countries: []
    }
  },
  async mounted() {
    const countryList = await api.fetchData('/hotel/location').then((response) => response.data)
    this.countries = countryList.map((country) => country.name).sort((a, b) => a.localeCompare(b))
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins/placeholder';

.select {
  min-width: 250px;
  margin-top: 3.5px;
  min-height: 24px;
  & .vs__dropdown-toggle,
  .vs__search {
    padding: 0;
    margin: 0;
    border: none;
    border: none;
  }
  & .vs__search {
    @include placeholder-style;
    font-size: 13px;
  }
  & .vs__open-indicator {
    display: none;
  }
  & .vs__selected {
    font-size: 13px;
    margin: 0;
    padding: 0;
  }
  & .vs__selected-options {
    max-height: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>

<template>
  <h2 class="form-banner__title">Find</h2>
  <form class="form-banner">
    <div class="form-banner__input form-banner__input-select">
      <VSelect label="Location" placeholder="Which city do you prefer?" />
    </div>

    <div class="form-banner__input form-banner__input-date-in">
      <VDateInput label="Check in" placeholder="Add Dates" />
    </div>

    <div class="form-banner__input form-banner__input-date-out">
      <VDateInput label="Check out" placeholder="Add Dates" />
    </div>

    <div class="form-banner__input form-banner__input-number">
      <VNumberInput label="Guests" placeholder="Add Guests" />
    </div>

    <AppButtonSubmit :btnSize="54" :btnIcon="icon" class="form-banner__button" />
  </form>
</template>

<script>
import Search from '@/assets/images/icons/Search.svg'
import VSelect from './VSelect.vue'
import VDateInput from './VInputDate.vue'
import VNumberInput from './VInputNumber.vue'
import AppButtonSubmit from '@/components/AppButtonSubmit.vue'

export default {
  components: {
    VSelect,
    VDateInput,
    VNumberInput,
    AppButtonSubmit
  },

  data() {
    return {
      countries: [],
      icon: Search
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/const';

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

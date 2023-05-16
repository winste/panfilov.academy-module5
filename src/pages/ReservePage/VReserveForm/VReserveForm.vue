<template>
  <form class="form">
    <div class="form__wrapper">
      <div class="form__main">
        <VReserveFormInput inputType="text" inputPlaceholder="First name *" class="form__field" />
        <VReserveFormInput inputType="text" inputPlaceholder="Last name *" class="form__field" />
        <VReserveFormInput inputType="text" inputPlaceholder="Info-1 *" class="form__field" />
        <VReserveFormInput inputType="text" inputPlaceholder="Info-2 *" class="form__field" />
        <div class="form__field">
          <VSelect placeholder="Country *" />
        </div>

        <VReserveFormInput
          inputType="email"
          inputPlaceholder="Email address *"
          class="form__field"
        />
      </div>
      <VReserveFormInput
        inputType="phone"
        inputPlaceholder="Phone number"
        class="form__field form__field-phone"
      />
      <VReserveFormInput
        inputType="text"
        inputPlaceholder="Comment"
        class="form__field form__field-comment"
      />
    </div>
    <AppButtonReserve class="form__button" />
  </form>
</template>

<script>
import AppButtonReserve from '@/components/AppButtonReserve.vue'
import VSelect from '@/pages/HomePage/VMainBanner/SearchBar/VSelect.vue'
import VReserveFormInput from './VReserveFormInput.vue'

export default {
  components: {
    VReserveFormInput,
    VSelect,
    AppButtonReserve
  }
}
</script>

<style lang="scss" scoped>
$form-width: 670px;

.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: $form-width;
  &__main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__field {
    color: rgb(149, 149, 149);
    border-bottom: 1px solid rgb(0, 0, 0);
    &-phone,
    &-comment {
      min-width: 100%;
    }
  }
  &__button {
    align-self: end;
  }
}
</style>

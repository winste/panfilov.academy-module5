<template>
  <form class="form">
    <div class="form__wrapper">
      <div class="form__main">
        <VOrderFormInput inputType="text" inputPlaceholder="First name *" class="form__field" />
        <VOrderFormInput inputType="text" inputPlaceholder="Last name *" class="form__field" />
        <VOrderFormInput inputType="text" inputPlaceholder="Info-1 *" class="form__field" />
        <VOrderFormInput inputType="text" inputPlaceholder="Info-2 *" class="form__field" />
        <div class="form__field">
          <VSelect placeholder="Country *" />
        </div>

        <VOrderFormInput inputType="email" inputPlaceholder="Email address *" class="form__field" />
      </div>
      <VOrderFormInput
        inputType="phone"
        inputPlaceholder="Phone number"
        class="form__field form__field-phone"
      />
      <VOrderFormInput
        inputType="text"
        inputPlaceholder="Comment"
        class="form__field form__field-comment"
      />
    </div>
    <VButtonReserve class="form__button" />
  </form>
</template>

<script>
import VButtonReserve from '../VButtonReserve.vue'
import VSelect from '../VMainBanner/VSelect.vue'
import VOrderFormInput from './VOrderFormInput.vue'

export default {
  components: {
    VOrderFormInput,
    VSelect,
    VButtonReserve
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
    color: #959595;
    border-bottom: 1px solid #000000;
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

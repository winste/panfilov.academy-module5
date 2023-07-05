<template>
  <div id="news-letter" class="news-letter container-wrapper">
    <div class="news-letter__info">
      <h4 class="news-letter__title">NEWSLETTER</h4>
      <p class="news-letter__text">Stay Upto Date</p>
    </div>

    <form @submit.prevent="submitEmail" class="news-letter__form">
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Your Email..."
        class="news-letter__input"
      />

      <AppButtonSubmit :icon="icon" :iconWidth="26" :iconHeight="26" class="news-letter__button" />
    </form>
  </div>
</template>

<script>
import AppButtonSubmit from '@/components/AppButtonSubmit.vue'
import LetterSubmit from '@/assets/images/icons/LetterSubmit.svg'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  components: {
    AppButtonSubmit
  },

  data() {
    return {
      v$: useVuelidate(),
      email: '',
      icon: LetterSubmit
    }
  },

  validations() {
    return {
      email: { required, email }
    }
  },

  methods: {
    async submitEmail() {
      const result = await this.v$.$validate()
      if (result) {
        alert('NEWS LETTER subscribed')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-center';

$formWidth: 794px;
$formHeight: 50px;

.news-letter {
  @include flexbox-center($gap: 80px);
  min-width: 100%;
  padding-top: 34px;
  padding-bottom: 33px;
  background-color: $news-letter-bg-color;
  &__info {
    padding-left: 7px;
  }
  &__title {
    font-size: 18px;
    letter-spacing: -0.2px;
    margin-top: 2px;
    margin-bottom: 5px;
  }
  &__text {
    font-size: 14px;
    letter-spacing: 0.1px;
  }
  &__form {
    display: flex;
    flex: 1 1 0;
    max-width: $formWidth;
    max-height: $formHeight;
    background-color: $input-bg-color;
    border-radius: 26px;
    box-shadow: inset -2px 0px 0px $news-letter-bg-color;
  }
  &__input {
    flex: 1 1 0;
    font-family: $main-font-family;
    font-weight: 500;
    color: $secondary-font-color;
    padding: 16px 23px;
    border-radius: 26px;
  }
  &__button {
    position: relative;
    top: -1px;
    right: 2px;
    opacity: 0.5;
  }
}

@media (max-width: 768px) {
  .news-letter {
    gap: 20px;
  }
}
</style>

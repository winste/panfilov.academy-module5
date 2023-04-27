<template>
  <div class="news-letter">
    <div class="news-letter__info">
      <h4 class="news-letter__title">NEWSLETTER</h4>
      <p class="news-letter__text">Stay Upto Date</p>
    </div>

    <form class="news-letter__form">
      <input
        type="email"
        name="email"
        value=""
        placeholder="Your Email..."
        class="news-letter__input"
      />
      <VButtonSubmit
        :btnIcon="icon"
        :btnIconWidth="26"
        :btnIconHeight="26"
        class="news-letter__button"
      />
    </form>
  </div>
</template>

<script>
import VButtonSubmit from './VButtonSubmit.vue'
import LetterSubmit from '@/assets/images/icons/LetterSubmit.svg'

export default {
  components: {
    VButtonSubmit
  },
  data() {
    return {
      icon: LetterSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixins/placeholder';
.news-letter {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  min-width: 100%;
  background-color: rgba(232, 234, 236, 1);
  &__text {
    font-size: 14px;
  }
  &__form {
    flex: 1 1 0;
    max-width: 794px;
    background-color: rgb(255, 255, 255);
    border-radius: 26px;
    display: flex;
  }
  &__input {
    flex: 1 1 0;
    padding: 16px 23px;
    border-radius: 26px;
    color: rgba(154, 154, 154, 1);
    font-family: 'Montserrat';
    font-weight: 500;
  }
  &__button {
    opacity: 0.5;
  }
}
</style>

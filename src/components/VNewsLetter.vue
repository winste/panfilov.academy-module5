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
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  min-width: 100%;
  padding: 34px 179px 33px 187px;
  background-color: rgba(232, 234, 236, 1);
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
    max-width: 794px;
    max-height: 50px;
    background-color: rgb(255, 255, 255);
    border-radius: 26px;
    box-shadow: inset -2px 0px 0px rgb(232, 234, 236);
  }
  &__input {
    flex: 1 1 0;
    font-family: 'Montserrat';
    font-weight: 500;
    color: rgba(154, 154, 154, 1);
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
</style>

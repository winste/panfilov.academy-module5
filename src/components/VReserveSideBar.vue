<template>
  <div class="reserve">
    <div class="reserve__price">{{ formattedPrice }}</div>
    <button type="submit" class="reserve__button">Reserve Now</button>
  </div>
</template>

<script>
export default {
  props: {
    reservePrice: {
      type: Object,
      defaut: () => {},
    },
  },
  computed: {
    formattedPrice() {
      return this.reservePrice
        .map((price) => price.replace('$', '$ '))
        .join(' - ')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/button-hover';

.reserve {
  max-width: 382px;
  min-height: 201px;
  padding: 30px;
  box-shadow: 0px 0px 16px rgba(194, 198, 204, 0.6);
  border-radius: 10px;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  &__price {
    padding-bottom: 27px;
    margin-bottom: 27px;
    border-bottom: 1px solid #e0e2e6;
  }
  &__button {
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    font-family: 'Montserrat';
    width: 324px;
    height: 60px;
    background: rgb(72, 72, 72);
    border-radius: 30px;
    @include button-hover;
  }
}
</style>

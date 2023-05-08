<template>
  <div class="reserve">
    <div v-text="formattedPrice" class="reserve__price"></div>
    <button type="submit" class="reserve__button">Reserve Now</button>
  </div>
</template>

<script>
export default {
  props: {
    reservePrice: {
      type: Object,
      defaut: () => {}
    }
  },
  computed: {
    formattedPrice() {
      return this.reservePrice.map((price) => price.replace('$', '$ ')).join(' - ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/button-hover';

$reserve-width: 382px;
$reserve-height: 201px;
$button-width: 324px;
$button-height: 60px;

.reserve {
  max-width: $reserve-width;
  min-height: $reserve-height;
  padding: 30px;
  box-shadow: 0px 0px 16px rgba(194, 198, 204, 0.6);
  border-radius: 10px;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  &__price {
    padding-bottom: 27px;
    margin-bottom: 27px;
    border-bottom: 1px solid $card-bg-color;
  }
  &__button {
    font-weight: 700;
    font-size: 15px;
    color: $button-font-color;
    min-width: $button-width;
    min-height: $button-height;
    background: $main-font-color;
    border-radius: 30px;
    @include button-hover($animation: true);
  }
}
</style>

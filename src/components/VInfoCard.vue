<template>
  <div class="card-info">
    <router-link :to="cardDetailLink">
      <h4 v-text="cardName" class="card-info__name"></h4>
    </router-link>
    <p v-text="cardAddress" class="card-info__address"></p>
  </div>
</template>

<script>
export default {
  props: {
    cardId: String,
    cardName: String,
    cardAddress: String,
    cardNameFontSize: String,
    cardAddressFontSize: {
      type: String,
      default: '14px'
    }
  },
  computed: {
    cardDetailLink() {
      return `/hotel/detail/${this.cardId}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/text-hide';
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-direction';

.card-info {
  @include flexbox-direction($direction: column, $gap: 0);
  justify-content: space-between;
  &__name {
    font-size: v-bind(cardNameFontSize);
    margin-bottom: 10px;
  }
  &__address {
    font-size: v-bind(cardAddressFontSize);
    color: $secondary-font-color;
    @include text-hide;
  }
}
</style>

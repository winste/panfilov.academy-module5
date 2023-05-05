<template>
  <div class="card-info">
    <a :href="cardDetailLink">
      <h4 class="card-info__name">
        {{ cardName }}
      </h4>
    </a>
    <p class="card-info__address">
      {{ cardAddress }}
    </p>
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
      default: '14px',
    },
  },
  computed: {
    cardDetailLink() {
      return `/hotel/detail/${this.cardId}`
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/mixins/text-hide';
@import '@/assets/scss/const';

.card-info {
  display: flex;
  flex-direction: column;
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

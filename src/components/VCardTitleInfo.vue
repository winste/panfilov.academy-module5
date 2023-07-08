<template>
  <div class="card-info">
    <router-link :to="cardDetailLink">
      <h4 class="card-info__name" v-text="name"></h4>
    </router-link>
    <p class="card-info__address" v-text="address"></p>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    address: String,
    nameSize: {
      type: String,
      default: '18px',
    },
    addressSize: {
      type: String,
      default: '14px',
    },
    gap: {
      type: String,
      default: '10px',
    },
  },
  computed: {
    cardDetailLink() {
      return `/hotel/detail/${this.id}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/text-hide';
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-direction';

.card-info {
  @include flexbox-direction($direction: column, $gap: v-bind(gap));
  &__name {
    font-size: v-bind(nameSize);
  }
  &__address {
    font-size: v-bind(addressSize);
    color: $secondary-font-color;
    @include text-hide;
  }
}
</style>

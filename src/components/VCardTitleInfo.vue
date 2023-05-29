<template>
  <div class="card-info">
    <router-link :to="cardDetailLink">
      <h4 v-text="name" class="card-info__name"></h4>
    </router-link>
    <p v-text="address" class="card-info__address"></p>
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
      default: '16px'
    },
    addressSize: {
      type: String,
      default: '14px'
    },
    gap: {
      type: String,
      default: '10px'
    }
  },
  computed: {
    cardDetailLink() {
      return `/hotel/detail/${this.id}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/text-hide';
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-direction';

.card-info {
  @include flexbox-direction($direction: column, $gap: v-bind(gap));
  justify-content: space-between;
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

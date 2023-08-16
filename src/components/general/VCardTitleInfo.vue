<template>
  <div class="card-info">
    <router-link :to="cardDetailLink">
      <h4 class="card-info__name" @click="redirectDetail" v-text="name"></h4>
    </router-link>
    <p class="card-info__address" v-text="address"></p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
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

  methods: {
    redirectDetail() {
      ym(94263519, 'reachGoal', 'website__card-click')
    },
  },
}
</script>

<style lang="scss" scoped>
.card-info {
  @include flexbox($direction: column, $gap: v-bind(gap));
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

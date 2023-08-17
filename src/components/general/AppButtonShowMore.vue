<template>
  <button
    class="button-show"
    @click="switchDisplayedList(), $emit('showAll', showAll)"
  >
    <span v-if="!showAll"> Show All {{ count }} {{ name }}</span>
    <span v-else> Hide {{ name }} list </span>
  </button>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showAll: false,
    }
  },
  methods: {
    switchDisplayedList() {
      this.showAll = !this.showAll
    },
  },
}
</script>

<style lang="scss" scoped>
.button-show {
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.2px;
  padding: 20px 36px 19px;
  background: #ffffff;
  border: 1px solid $main-font-color;
  border-radius: 6px;
  &:hover {
    color: $secondary-font-color;
    @include button-hover;
  }
}
</style>

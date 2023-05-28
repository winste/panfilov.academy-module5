<template>
  <button @click="switchDisplayedList(), $emit('showAll', showAll)" class="button-show">
    <span v-if="!showAll"> Show All {{ count }} {{ name }}</span>
    <span v-else> Hide {{ name }} list </span>
  </button>
</template>

<script>
export default {
  props: {
    count: Number,
    name: String
  },
  data() {
    return {
      showAll: false
    }
  },
  methods: {
    switchDisplayedList() {
      this.showAll = !this.showAll
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/button-hover';

.button-show {
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 15px;
  padding: 22px 37px;
  background: $button-font-color;
  border: 1px solid $main-font-color;
  border-radius: 6px;
  &:hover {
    color: $secondary-font-color;
    @include button-hover($animation: true);
  }
}
</style>

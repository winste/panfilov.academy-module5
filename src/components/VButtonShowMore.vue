<template>
  <button @click="switchDisplayedList(), $emit('showAll', showAll)" class="button-show">
    <span v-if="!showAll"> Show All {{ listItemsCount }} {{ listItemsName }}</span>
    <span v-else> Hide {{ listItemsName }} list </span>
  </button>
</template>

<script>
export default {
  props: {
    listItemsCount: Number,
    listItemsName: String
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
.button-show {
  display: flex;
  justify-content: center;
  align-self: start;
  font-weight: 600;
  font-size: 15px;
  padding: 22px 37px;
  background: #ffffff;
  border: 1px solid rgb(72, 72, 72);
  border-radius: 6px;
  &:hover {
    color: grey;
  }
}
</style>

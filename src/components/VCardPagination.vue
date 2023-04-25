<template>
  <div class="pagination">
    <button
      v-for="(number, index) in slideCount"
      :key="index"
      @click="$emit('switch', number)"
      class="pagination__button"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    slideCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 5px;
  &__button {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    &:hover {
      background-color: rgb(179, 173, 173);
    }
  }
}
</style>

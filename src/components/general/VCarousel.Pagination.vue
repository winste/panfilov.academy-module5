<template>
  <div class="pagination">
    <button
      v-for="(number, index) in slideCount"
      :key="index"
      :class="
        index == slideIndex
          ? 'pagination__indicator pagination__indicator--active'
          : 'pagination__indicator'
      "
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    slideCount: {
      type: Number,
      default: 0,
    },
    slideIndex: {
      type: Number,
      default: 0,
    },
    position: {
      type: String,
      default: 'center',
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  @include flexbox($align-items: v-bind(position), $gap: 5px);
  &__indicator {
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border-radius: 50%;
    &:hover {
      background-color: $secondary-font-color;
    }
    &--active {
      background-color: $secondary-font-color;
    }
  }
}
</style>

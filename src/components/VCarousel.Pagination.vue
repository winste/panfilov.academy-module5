<template>
  <div class="pagination">
    <button
      v-for="(number, index) in slideCount"
      :key="index"
      @click="$emit('switch', index)"
      :class="
        index == slideIndex
          ? 'pagination__indicator pagination__indicator--active'
          : 'pagination__indicator'
      "
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    slideCount: {
      type: Number,
      default: 0
    },
    slideIndex: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

$indicator-size: 10px;

.pagination {
  display: flex;
  align-items: center;
  gap: 5px;
  &__indicator {
    width: $indicator-size;
    height: $indicator-size;
    background-color: $input-bg-color;
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

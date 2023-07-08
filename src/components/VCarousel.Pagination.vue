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
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-general';

$indicator-size: 10px;

.pagination {
  @include flexbox-general($gap: 5px);
  align-items: v-bind(position);
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
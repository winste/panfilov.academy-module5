<template>
  <div class="rating-line">
    <div class="rating-line__line-wrapper">
      <span class="rating-line__line"></span>
    </div>

    <span class="rating-line__number" v-text="formattedRating"></span>
  </div>
</template>

<script>
export default {
  props: {
    rating: { type: Number, required: true },
  },
  data() {
    return {
      maxRating: 5,
      maxWidth: 135,
    }
  },
  computed: {
    calculateWidth() {
      return `${this.maxWidth * (this.rating / this.maxRating)}px`
    },
    formattedRating() {
      return this.rating % 1 > 0 ? this.rating : `${this.rating}.0`
    },
    formattedWidth() {
      return `${this.maxWidth}px`
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

$line-width: 4px;

.rating-line {
  display: flex;
  gap: 13px;
  &__line {
    display: inline-block;
    height: $line-width;
    width: v-bind(calculateWidth);
    background-color: $secondary-font-color;
    border-radius: 2px;
    &-wrapper {
      display: flex;
      align-items: center;
      min-width: v-bind(maxWidth);
    }
  }
}
</style>

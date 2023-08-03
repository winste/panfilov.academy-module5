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
    rating: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      maxRating: 5,
      maxWidth: 135,
    }
  },
  computed: {
    // ширина линиии по отношению к максимальной, уменьшается в процентном соотношении
    calculateWidth() {
      return `${this.maxWidth * (this.rating / this.maxRating)}px`
    },
    // отформатированный отображаемый рейтинг рядом с линией
    formattedRating() {
      return this.rating % 1 > 0 ? this.rating : `${this.rating}.0`
    },
  },
}
</script>

<style lang="scss" scoped>
.rating-line {
  @include flexbox($gap: 13px, $wrap: nowrap);
  &__line {
    display: inline-block;
    height: 4px;
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
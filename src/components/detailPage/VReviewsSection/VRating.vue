<template>
  <div class="rating">
    <span v-for="rating in ratings" :key="rating" class="rating__item">
      <p class="rating__name" v-text="rating.name"></p>
      <VRatingLine :rating="rating.rating" class="rating__line" />
    </span>
  </div>
</template>

<script>
import VRatingLine from './VRatingLine.vue'

export default {
  components: {
    VRatingLine,
  },
  props: {
    ratings: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.rating {
  &__name {
    min-width: 180px;
    letter-spacing: 0.1px;
  }
  &__item {
    @include flexbox($gap: 14px);
  }
}

@media (max-width: 480px) {
  .rating {
    &__item {
      gap: 0;
    }
  }
}
</style>

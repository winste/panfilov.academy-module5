<template>
  <div class="rating">
    <span v-for="rating in ratings" class="rating__item">
      <p v-text="rating.name" class="rating__name"></p>
      <VRatingLine :rating="rating.rating" class="rating__line" />
    </span>
  </div>
</template>

<script>
import VRatingLine from './VRatingLine.vue'

export default {
  components: {
    VRatingLine
  },
  props: {
    ratings: Array
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';
.rating {
  &__name {
    min-width: 180px;
    letter-spacing: 0.1px;
  }
  &__item {
    @include flexbox-general($gap: 14px);
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

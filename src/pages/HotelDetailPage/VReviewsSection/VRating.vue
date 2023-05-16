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
.rating {
  &__name {
    min-width: 180px;
  }
  &__total {
    display: flex;
    flex-wrap: wrap;
    gap: 13px 45px;
  }
  &__item {
    display: flex;
  }
}
</style>

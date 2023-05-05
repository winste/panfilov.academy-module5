<template>
  <div class="rating">
    {{ averageRating }}
    <span v-for="(rating, index) in ratingList" :key="index" class="rating__item">
      <p class="rating__name">{{ rating.name }}</p>
      <VHotelRatingLine :rating="rating.rating" class="rating__line" />
    </span>
  </div>
</template>

<script>
import VHotelRatingLine from './VHotelRatingLine.vue'

export default {
  components: {
    VHotelRatingLine
  },
  data() {
    return {
      ratingList: [
        { name: 'Amenities', rating: 5 },
        { name: 'Hygiene', rating: 2.5 },
        { name: 'Communication', rating: 4.3 },
        { name: 'Location of Property', rating: 3 },
        { name: 'Value for Money', rating: 1 }
      ]
    }
  },
  computed: {
    averageRating() {
      return (
        this.ratingList.reduce((initial, obj) => initial + obj.rating, 0) / this.ratingList.length
      ).toFixed(1)
    }
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
  &__line {
    min-width: 150px;
  }
}
</style>

<template>
  <section class="reviews">
    <h4 class="reviews__title">
      <span class="reviews__title-text">Reviews</span>
      <AppIcon :name="reviewsIcon" class="reviews__title-icon" />
      <span v-text="averageRating" class="reviews__title-rating"></span>
    </h4>

    <VRating :ratings="ratingList" class="reviews__rating" />

    <div class="reviews__list">
      <VReview
        v-for="(review, id) in reviewsListFormatted"
        :key="id"
        :reviewAvatar="review.author.avatar"
        :reviewName="review.author.name"
        :reviewDate="review.date"
        :reviewContent="review.content"
        class="reviews__item"
      />
    </div>

    <AppButtonShowMore @showAll="changeDisplayedValue" :count="reviewsListCount" name="Reviews" />
  </section>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'
import Star from '@/assets/images/icons/Star.svg'
import AppButtonShowMore from '@/components/AppButtonShowMore.vue'
import VRating from './VRating.vue'
import VReview from './VReview.vue'

export default {
  components: {
    AppIcon,
    VRating,
    VReview,
    AppButtonShowMore
  },
  props: {
    reviewsList: Array,
    reviewsDisplayedCount: Number
  },
  data() {
    return {
      ratingList: [
        { name: 'Amenities', rating: 5 },
        { name: 'Hygiene', rating: 5 },
        { name: 'Communication', rating: 5 },
        { name: 'Location of Property', rating: 5 },
        { name: 'Value for Money', rating: 5 }
      ],
      reviewsIcon: Star,
      showAllReviews: null
    }
  },

  computed: {
    averageRating() {
      return (
        this.ratingList.reduce((initial, obj) => initial + obj.rating, 0) / this.ratingList.length
      ).toFixed(1)
    },
    reviewsListCount() {
      return this.reviewsList.length
    },
    reviewsListFormatted() {
      return this.showAllReviews
        ? this.reviewsList
        : this.reviewsList.slice(0, this.reviewsDisplayedCount)
    }
  },
  methods: {
    changeDisplayedValue(data) {
      this.showAllReviews = data
    }
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  &__title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 27px;
    &-text {
      letter-spacing: -0.1px;
      margin-right: 7px;
    }
    &-icon {
      margin-bottom: 1px;
    }
    &-rating {
      margin-left: 5px;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 31px;
  }
  &__rating {
    display: flex;
    flex-wrap: wrap;
    gap: 16.5px 47.5px;
    margin-bottom: 50px;
    margin-left: 2px;
  }
  &__list {
    margin-bottom: 40px;
  }
  &__item {
    max-width: 382px;
    padding-left: 2px;
  }
}
</style>

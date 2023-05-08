<template>
  <section class="reviews">
    <h4 class="reviews__title">
      <span class="reviews__title-text">Reviews</span>
      <VIcon :iconName="reviewsIcon" />
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

    <VButtonShowMore
      @showAll="changeDisplayedValue"
      :listItemsCount="reviewsListCount"
      listItemsName="Reviews"
    />
  </section>
</template>

<script>
import VIcon from '@/components/VIcon.vue'
import Star from '@/assets/images/icons/Star.svg'
import VRating from './VRating.vue'
import VReview from './VReview.vue'
import VButtonShowMore from '../VButtonShowMore.vue'

export default {
  components: {
    VIcon,
    VRating,
    VReview,
    VButtonShowMore
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
    margin-bottom: 24px;
    &-text {
      letter-spacing: -0.1px;
      margin-right: 7px;
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
    gap: 13px 45px;
    margin-bottom: 47px;
  }
  &__list {
    margin-bottom: 40px;
  }
  &__item {
    max-width: 382px;
  }
}
</style>

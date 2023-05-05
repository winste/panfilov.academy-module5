<template>
  <section class="reviews">
    <h3 class="reviews__title">
      Reviews
      <VIcon :iconName="reviewsIcon" />
    </h3>

    <VHotelRating />

    <div class="reviews__list">
      <VHotelReview
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
import VIcon from '../components/VIcon.vue'
import Star from '../assets/images/icons/Star.svg'
import VHotelRating from '../components/VHotelRating.vue'
import VHotelReview from '../components/VHotelReview.vue'
import VButtonShowMore from './VButtonShowMore.vue'

export default {
  components: {
    VIcon,
    VHotelRating,
    VHotelReview,
    VButtonShowMore
  },
  props: {
    reviewsList: Array,
    reviewsDisplayedCount: Number
  },
  data() {
    return {
      reviewsIcon: Star,
      showAllReviews: null
    }
  },

  computed: {
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
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 31px;
  }
  &__item {
    max-width: 382px;
  }
}
</style>

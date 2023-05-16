<template>
  <div class="review">
    <div class="review__main">
      <AppAvatar :avatarUrl="reviewAvatar" class="review__avatar" />
      <h5 v-text="reviewName" class="review__title"></h5>
      <span v-text="dataFormatted" class="review__date"></span>
    </div>
    <p v-text="reviewContent" class="review__text"></p>
  </div>
</template>

<script>
import AppAvatar from '@/components/AppAvatar.vue'

export default {
  components: {
    AppAvatar
  },
  props: {
    reviewAvatar: String,
    reviewName: String,
    reviewDate: String,
    reviewContent: String
  },
  computed: {
    dataFormatted() {
      const date = new Date(this.reviewDate)
      const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }

      return date.toLocaleDateString('en-US', options).replace(',', ' ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.review {
  &__main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 3px 13px;
    margin-bottom: 20px;
  }
  &__avatar {
    grid-area: 1/1/3/2;
  }
  &__title {
    align-self: end;
  }
  &__date {
    font-weight: 500;
    font-size: 14px;
    color: $secondary-font-color;
  }
  &__text {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: rgb(153, 153, 153);
  }
}
</style>

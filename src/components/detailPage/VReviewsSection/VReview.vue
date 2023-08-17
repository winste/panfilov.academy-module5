<template>
  <div class="review">
    <div class="review__main">
      <AppAvatar :src="avatar" class="review__avatar" />
      <h5 class="review__title" v-text="name"></h5>
      <span class="review__date" v-text="dateFormatted"></span>
    </div>
    <p class="review__text" v-text="text"></p>
  </div>
</template>

<script>
import AppAvatar from '@/components/general/AppAvatar.vue'

export default {
  components: {
    AppAvatar,
  },

  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },

  computed: {
    dateFormatted() {
      const date = new Date(this.date)
      const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }

      return date.toLocaleDateString('en-US', options).replace(',', ' ')
    },
  },
}
</script>

<style lang="scss" scoped>
.review {
  &__main {
    display: grid;
    grid-template-columns: 1fr 4fr;
    gap: 3px 16px;
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
    color: #999999;
  }
}
</style>

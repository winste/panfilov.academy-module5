<template>
  <div class="review">
    <div class="review__main">
      <VAvatar :avatarUrl="reviewAvatar" />
      <h4 class="review__title">
        {{ reviewName }}
      </h4>
      <span class="review__date">
        {{ reviewDate }}
      </span>
    </div>
    <p class="review__text">
      {{ reviewContent }}
    </p>
  </div>
</template>

<script>
import VAvatar from './VAvatar.vue'

export default {
  components: {
    VAvatar
  },
  props: {
    reviewAvatar: String,
    reviewName: String,
    reviewDate: String,
    reviewContent: String
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="host-info">
    <AppAvatar :url="avatar" size="76px" class="host-info__avatar" />
    <span class="host-info__text">
      <p class="host-info__text-item">Listed By:</p>
      <p class="host-info__text-author">{{ name }}</p>
      <p class="host-info__text-price">For: {{ correctPrice }}</p>
    </span>
  </div>
</template>

<script>
import AppAvatar from '@/components/AppAvatar.vue'
import formattedPrice from '@/helpers/formattedPrice'

export default {
  components: {
    AppAvatar,
  },
  props: {
    avatar: String,
    name: String,
    price: Array,
  },
  computed: {
    correctPrice() {
      return formattedPrice.addSpaceWithDash(this.price)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';
@import '@/assets/scss/mixins/flexbox-direction';

.host-info {
  @include flexbox-general($gap: 21px);
  &__text {
    @include flexbox-direction($direction: column, $gap: 4px);
    font-weight: 500;
    margin-top: 8px;
    &-item {
      font-size: 12px;
    }
    &-author {
      font-weight: 700;
      font-size: 18px;
    }
    &-price {
      margin-bottom: 4px;
    }
  }
}

@media (max-width: 480px) {
  .host-info {
    flex-wrap: nowrap;
    gap: 7px;
    &__text {
      margin: 0;
      &-author {
        font-size: 16px;
      }
    }
  }
}
</style>

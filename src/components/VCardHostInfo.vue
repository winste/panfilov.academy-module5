<template lang="">
  <div class="host-info">
    <AppAvatar :url="avatar" avatarSize="76px" />
    <span class="host-info__text">
      <p class="host-info__text-item">Listed By:</p>
      <p class="host-info__text-author">{{ name }}</p>
      <p class="host-info__text-price">For: {{ formattedPrice }}</p>
    </span>
  </div>
</template>

<script>
import AppAvatar from '@/components/AppAvatar.vue'
export default {
  components: {
    AppAvatar
  },
  props: {
    avatar: String,
    name: String,
    price: Array
  },
  computed: {
    formattedPrice() {
      return this.price.map((price) => price.replace('$', ' $ ')).join('  -  ')
    }
  }
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
</style>

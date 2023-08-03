<template>
  <div class="host-info">
    <AppAvatar :src="avatar" size="76px" class="host-info__avatar" />
    <span class="host-info__text">
      <p class="host-info__item">Listed By:</p>
      <p class="host-info__author">{{ name }}</p>
      <p class="host-info__price">For: {{ correctPrice }}</p>
    </span>
  </div>
</template>

<script>
import AppAvatar from '@/components/general/AppAvatar.vue'
import formattedPrice from '@/helpers/formattedPrice'

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
    price: {
      type: Array,
      required: true,
    },
  },
  computed: {
    correctPrice() {
      return formattedPrice.addSpaceWithDash(this.price)
    },
  },
}
</script>

<style lang="scss" scoped>
.host-info {
  @include flexbox($gap: 21px);
  &__text {
    @include flexbox($direction: column, $gap: 4px);
    font-weight: 500;
    margin-top: 8px;
  }
  &__item {
    font-size: 12px;
  }
  &__author {
    font-weight: 700;
    font-size: 18px;
  }
  &__price {
    margin-bottom: 4px;
  }
}

@media (max-width: 480px) {
  .host-info {
    flex-wrap: nowrap;
    gap: 7px;
    &__text {
      margin: 0;
    }
    &__author {
      font-size: 16px;
    }
  }
}
</style>
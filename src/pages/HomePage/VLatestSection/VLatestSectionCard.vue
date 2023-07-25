<template>
  <div class="latest-card" :style="{ 'background-image': `url(${background})` }">
    <AppButtonIcon :icon="icon" :width="30" :heigh="30" class="latest-card__icon" />
    <div class="latest-card__content">
      <AppAvatar :src="avatar" class="latest-card__avatar" />
      <VCardTitleInfo
        :id="id"
        :name="name"
        :address="address"
        name-size="17px"
        address-size="13px"
        class="latest-card__info"
      />
    </div>
  </div>
</template>

<script>
import AppAvatar from '@/components/AppAvatar.vue'
import AppButtonIcon from '@/components/AppButtonIcon.vue'
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import Like from '@/assets/images/icons/Like.svg'

export default {
  components: {
    AppAvatar,
    VCardTitleInfo,
    AppButtonIcon,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    background: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '279px',
    },
    height: {
      type: String,
      default: '340px',
    },
  },

  data() {
    return {
      icon: Like,
    }
  },
}
</script>

<style lang="scss" scoped>
.latest-card {
  @include flexbox($direction: column, $justify-content: space-between, $gap: 0px, $wrap: nowrap);
  min-width: v-bind(width);
  max-width: 600px;
  min-height: v-bind(height);
  padding: 18px 17px 19px 21px;
  border-radius: 8px;
  @include background-position;
  &__icon {
    align-self: end;
  }
  &__avatar {
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .latest-card {
    min-height: auto;
  }
}
</style>
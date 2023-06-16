<template>
  <div class="latest-card" :style="{ 'background-image': `url(${background})` }">
    <AppButtonIcon
      :buttonIcon="latestCardIcon"
      :buttonWidth="30"
      :buttonHeigh="30"
      class="latest-card__icon"
    />
    <div class="latest-card__content">
      <AppAvatar :src="avatar" class="latest-card__avatar" />
      <VCardTitleInfo
        :id="id"
        :name="name"
        :address="address"
        nameSize="17px"
        addressSize="13px"
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
    AppButtonIcon
  },
  props: {
    id: String,
    avatar: String,
    background: String,
    name: String,
    address: String,
    width: {
      type: String,
      default: '279px'
    },
    height: {
      type: String,
      default: '340px'
    }
  },
  data() {
    return {
      latestCardIcon: Like
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/background-position';
@import '@/assets/scss/mixins/flexbox-direction';

.latest-card {
  @include flexbox-direction($direction: column, $gap: 0px, $flexWrap: nowrap);
  justify-content: space-between;
  min-width: v-bind(width);
  max-width: 600px;
  min-height: v-bind(height);
  padding: 18px 17px 19px 21px;
  border-radius: 8px;
  background-color: $card-bg-color;
  @include background-position;
  &__icon {
    align-self: end;
  }
  &__avatar {
    margin-bottom: 15px;
  }
}
</style>

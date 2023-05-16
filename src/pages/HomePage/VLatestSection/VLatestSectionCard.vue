<template>
  <div class="latest-card" :style="{ 'background-image': `url(${urlBg})` }">
    <AppButtonIcon
      :buttonIcon="latestCardIcon"
      :buttonWidth="30"
      :buttonHeigh="30"
      class="latest-card__icon"
    />
    <div class="latest-card__content">
      <AppAvatar :avatarUrl="urlAvatar" class="latest-card__avatar" />
      <VCardTitleInfo
        :cardId="id"
        :cardName="name"
        :cardAddress="address"
        cardNameFontSize="17px"
        cardAddressFontSize="13px"
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
    urlAvatar: String,
    urlBg: String,
    name: String,
    address: String
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

$card-width: 279px;
$card-height: 340px;
$card-border-radius: 8px;

.latest-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: $card-width;
  min-height: $card-height;
  padding: 18px 17px 19px 21px;
  border-radius: $card-border-radius;
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

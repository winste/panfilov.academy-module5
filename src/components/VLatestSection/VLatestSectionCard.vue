<template>
  <div class="latest-card" :style="{ 'background-image': `url(${urlBg})` }">
    <VButtonFavorite class="latest-card__icon" />
    <div class="latest-card__content">
      <VAvatar :src="urlAvatar" class="latest-card__avatar" />
      <VInfoCard
        :idCard="id"
        :nameCard="name"
        :addressCard="address"
        :fontSizeName="17"
        :fontSizeAddress="13"
        class="latest-card__info"
      />
    </div>
  </div>
</template>

<script>
import VAvatar from '../VAvatar.vue'
import VButtonFavorite from '../VButtonFavorite.vue'
import VInfoCard from '../VInfoCard.vue'

export default {
  components: {
    VAvatar,
    VInfoCard,
    VButtonFavorite
  },
  props: {
    id: String,
    urlAvatar: String,
    urlBg: String,
    name: String,
    address: String
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/const';
@import '../../assets/scss/mixins/background-position';

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

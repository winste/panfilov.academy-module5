<template>
  <div class="latest-card" :style="backgroundUrl">
    <VButtonFavorite class="latest-card__icon" />
    <div class="latest-card__content">
      <VAvatar :src="urlAvatar" />
      <VInfoCard :idCard="id" :nameCard="name" :addressCard="address" />
    </div>
  </div>
</template>

<script>
import VAvatar from './VAvatar.vue'
import VButtonFavorite from './VButtonFavorite.vue'
import VInfoCard from './VInfoCard.vue'

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
  },
  computed: {
    backgroundUrl() {
      return `background-image: url("${this.urlBg}");`
    }
  }
}
</script>

<style lang="scss">
.latest-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 279px;
  height: 340px;
  padding: 18px 21px;
  background-color: rgba(224, 226, 230, 1);
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  &__icon {
    align-self: end;
  }
  &__name {
    margin-top: 15px;
  }
}
</style>

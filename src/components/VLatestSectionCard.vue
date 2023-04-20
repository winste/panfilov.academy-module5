<template>
  <div class="latestCard" :style="backgroundUrl">
    <VIcon :nameIcon="icon" width="26" height="23" class="latestCard__icon" />
    <div class="latestCard__content">
      <VAvatar :src="urlAvatar" />
      <VInfoCard :idCard="id" :nameCard="name" :addressCard="address" />
    </div>
  </div>
</template>

<script>
import Like from '@/assets/images/icons/Like.svg'
import VIcon from './VIcon.vue'
import VAvatar from './VAvatar.vue'
import VInfoCard from './VInfoCard.vue'

export default {
  components: {
    Like,
    VIcon,
    VAvatar,
    VInfoCard
  },
  data() {
    return {
      icon: Like
    }
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
.latestCard {
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

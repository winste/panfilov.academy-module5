<template>
  <img :src="avatarUrl" alt="avatar" class="avatar" />
</template>

<script>
export default {
  props: {
    avatarUrl: String,
    avatarSize: {
      type: String,
      default: '70px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.avatar {
  width: v-bind(avatarSize);
  height: v-bind(avatarSize);
  background-color: $placeholder-color;
  border-radius: 50%;
}
</style>

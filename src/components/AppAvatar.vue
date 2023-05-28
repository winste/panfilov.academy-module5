<template>
  <img :src="url" alt="avatar" class="avatar" />
</template>

<script>
export default {
  props: {
    url: String,
    size: {
      type: String,
      default: '70px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind(size);
  height: v-bind(size);
  background-color: $placeholder-color;
  border-radius: 50%;
}
</style>

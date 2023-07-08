<template>
  <img :src="url" alt="avatar" class="avatar" />
</template>

<script>
export default {
  props: {
    url: { type: String, required: true },
    size: {
      type: String,
      default: '70px',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-center';

.avatar {
  @include flexbox-center;
  width: v-bind(size);
  height: v-bind(size);
  background-color: $placeholder-color;
  border-radius: 50%;
}

@media (max-width: 480px) {
  $size: 60px;

  .avatar {
    width: $size;
    height: $size;
  }
}
</style>
<template>
  <img :src="src" alt="avatar" class="avatar" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '70px',
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  @include flexbox($align-items: center, $justify-content: center);
  width: v-bind(size);
  height: v-bind(size);
  background-color: #c2c6cc;
  border-radius: 50%;
}

@media (max-width: 480px) {
  .avatar {
    width: 60px;
    height: 60px;
  }
}
</style>

<template>
  <img :src="src" alt="avatar" class="avatar" />
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style lang="scss" scoped>
$size: 70px;

.avatar {
  max-width: $size;
  max-height: $size;
  background-color: rgba(194, 198, 204, 1);
  border-radius: 50%;
}
</style>

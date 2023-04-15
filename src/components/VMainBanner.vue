<template>
  <section class="mainBanner" :style="urlBackground">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    image: String
  },
  computed: {
    urlBackground() {
      return `background-image: url("${this.image}");`
    }
  }
}
</script>

<style lang="scss">
$bgcolor: rgba(239, 240, 242, 1);

.mainBanner {
  height: 591px;
  background-color: $bgcolor;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-size: 100%;
  object-fit: cover;
}
</style>

<template>
  <div v-html="formatText[0]" class="block"></div>
</template>

<script>
export default {
  props: {
    hotelDescription: String
  },
  computed: {
    formatText() {
      return this.hotelDescription.split('"')
    }
  }
}
</script>

<style lang="scss">
.block {
  font-size: 15px;
  line-height: 20px;
  color: #9a9a9a;
}
</style>

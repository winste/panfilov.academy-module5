<template>
  <div class="card-info">
    <a :href="cardDetailLink">
      <h4 class="card-info__name" :style="{ 'font-size': `${fontSizeName}px` }">
        {{ nameCard }}
      </h4>
    </a>
    <p class="card-info__address" :style="{ 'font-size': `${fontSizeAddress}px` }">
      {{ addressCard }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    idCard: String,
    nameCard: String,
    addressCard: String,
    fontSizeName: Number,
    fontSizeAddress: Number
  },
  computed: {
    cardDetailLink() {
      return `/hotel/detail/${this.idCard}`
    }
  }
}
</script>
<style lang="scss" scoped>
.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__name {
    margin-bottom: 10px;
  }
  &__address {
    font-size: 14px;
    color: rgba(154, 154, 154, 1);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>

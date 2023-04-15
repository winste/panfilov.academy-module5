<template>
  <div class="card-info">
    <a :href="cardDetailLink">
      <h4 class="card-info__name">
        {{ nameCard }}
      </h4>
    </a>
    <p class="card-info__address">
      {{ addressCard }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    idCard: String,
    nameCard: String,
    addressCard: String
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
    padding-bottom: 5px;
  }
  &__address {
    font-size: 14px;
    color: rgba(154, 154, 154, 1);
  }
}
</style>

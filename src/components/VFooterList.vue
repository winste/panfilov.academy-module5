<template>
  <div class="info">
    <ul class="info__list">
      <h4 class="info__list-title">{{ itemsTitle }}</h4>
      <li v-for="(item, index) in itemsList" :key="index" class="info__list-item">
        <a :href="item.href" class="info__list-link">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    itemsTitle: String,
    itemsList: Array
  }
}
</script>

<style lang="scss">
.info {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &-title {
      font-size: 18px;
      margin-bottom: 15px;
    }
    &-item {
      font-size: 15px;
    }
    &-link {
      font-weight: 500;
    }
  }
}
</style>

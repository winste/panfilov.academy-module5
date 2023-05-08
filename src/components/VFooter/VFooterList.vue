<template>
  <div class="info">
    <h4 v-text="itemsTitle" class="info__list-title"></h4>
    <ul class="info__list">
      <li v-for="(item, index) in itemsList" :key="index" class="info__list-item">
        <a :href="item.href" v-text="item.name" class="info__list-link"></a>
      </li>
      <li class="info__list-item">
        <slot></slot>
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
  padding: 0 5px;
  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
    &-title {
      font-size: 18px;
      margin-bottom: 27px;
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

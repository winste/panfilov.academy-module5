<template>
  <div class="info">
    <h4 class="info__list-title" v-text="title"></h4>
    <ul class="info__list">
      <li v-for="item in list" :key="item.href" class="info__list-item">
        <router-link
          v-if="typeFollow == 'router'"
          :to="item.href"
          class="info__list-link"
        >
          {{ item.name }}</router-link
        >
        <a
          v-if="typeFollow == 'link'"
          :href="item.href"
          class="info__list-link"
          v-text="item.name"
        ></a>
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
    title: { type: String, required: true },
    list: { type: Array, required: true },
    typeFollow: {
      type: String,
      default: 'router',
    },
  },
}
</script>

<style lang="scss">
.info {
  padding: 0 5px;
  &__list {
    @include flexbox($direction: column, $gap: 14px);
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

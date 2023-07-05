<template>
  <div class="info">
    <h4 v-text="title" class="info__list-title"></h4>
    <ul class="info__list">
      <li v-for="item in list" class="info__list-item">
        <router-link
          v-if="typeFollow == 'router'"
          :to="item.href"
          v-text="item.name"
          class="info__list-link"
        ></router-link>
        <a
          v-if="typeFollow == 'link'"
          :href="item.href"
          v-text="item.name"
          class="info__list-link"
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
    title: String,
    list: Array,
    typeFollow: {
      type: String,
      default: 'router'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/mixins/_flexbox-direction.scss';

.info {
  padding: 0 5px;
  &__list {
    @include flexbox-direction($direction: column, $gap: 14px);
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

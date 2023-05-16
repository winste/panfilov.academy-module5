<template>
  <div class="store">
    <a :href="storeUrl" target="_blank" class="store-link">
      <AppIcon
        :name="storeIcon"
        :width="storeIconWidth"
        :height="storeIconHeight"
        class="store-icon"
      />
      <p v-text="storeName" class="store-name"></p>
    </a>
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  components: {
    AppIcon
  },
  props: {
    storeUrl: String,
    storeIcon: String,
    storeIconWidth: Number,
    storeIconHeight: Number,
    storeName: String
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/button-hover';

.store {
  background-color: rgba(224, 226, 230, 1);
  border-radius: 6px;
  width: 172px;
  height: 52px;
  &-name {
    font-size: 15px;
    font-weight: 600;
    margin-top: 2px;
  }
  &-link {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 15px 15px 13px 13px;
    &:hover {
      @include button-hover($animation: true);
    }
  }
}
</style>

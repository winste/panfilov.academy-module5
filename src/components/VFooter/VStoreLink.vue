<template>
  <div class="store">
    <a :href="storeUrl" target="_blank" class="store-link">
      <VIcon
        :iconName="storeIcon"
        :width="storeIconWidth"
        :height="storeIconHeight"
        class="store-icon"
      />
      <p class="store-name">{{ storeName }}</p>
    </a>
  </div>
</template>

<script>
import VIcon from '../VIcon.vue'

export default {
  components: {
    VIcon
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
  }
}
</style>

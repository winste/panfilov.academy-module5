<template>
  <section class="search-map">
    <VMap :coords="coords" width="668px" height="757px" />

    <div class="search-map__info">
      <img :src="image" alt="Hotel image" class="search-map__image" />
      <div>
        <VCardTitleInfo :id="id" :name="name" :address="address" class="search-map__title" />
      </div>
    </div>
  </section>
</template>

<script>
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import VMap from '@/components/VMap.vue'

export default {
  components: {
    VMap,
    VCardTitleInfo
  },

  props: {
    coords: Array,
    image: String,
    id: String,
    name: String,
    address: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.search-map {
  position: relative;
  width: 668px;
  height: 757px;
  background-color: $main-decor-color;
  &__info {
    position: absolute;
    bottom: 100px;
    left: 80px;
    max-width: 485px;
    min-height: 160px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0px 0px 10px #e5e5e5;
  }
  &__image {
    max-width: 160px;
    min-height: 160px;
    background: #e0e2e6;
  }
  &__title {
    padding: 26px 18px;
  }
}
</style>

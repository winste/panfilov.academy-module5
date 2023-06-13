<template>
  <section class="search-map">
    <VMap :coords="coords" width="668px" height="757px" />

    <div class="search-map__info">
      <VSearchMapProperties
        :image="image"
        :id="id"
        :name="name"
        :address="address"
        :properties="properties"
      />
    </div>
  </section>
</template>

<script>
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import VMap from '@/components/VMap.vue'
import VSearchMapProperties from './VSearchMapProperties.vue'

export default {
  components: {
    VMap,
    VCardTitleInfo,
    VSearchMapProperties
  },

  props: {
    coords: Array,
    image: String,
    id: String,
    name: String,
    address: String,
    properties: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.search-map {
  position: relative;
  min-width: 668px;
  height: 757px;
  background-color: $main-decor-color;
  &__info {
    position: absolute;
    bottom: 117px;
    left: 101px;
    max-width: 485px;
    min-height: 160px;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    background: rgb(255, 255, 255);
    box-shadow: $box-shadow;
  }
  &__image {
    max-width: 160px;
    min-height: 160px;
    background: $card-bg-color;
  }
  &__title {
    padding: 26px 18px;
  }
}
</style>

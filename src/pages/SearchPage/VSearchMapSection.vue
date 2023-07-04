<template>
  <section class="search-map">
    <VMap :coords="coords" :width="width" :height="height" />

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
    properties: Object,
    width: {
      type: String,
      default: '668px'
    },
    height: {
      type: String,
      default: '757px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';

.search-map {
  position: relative;
  max-width: v-bind(width);
  max-height: v-bind(height);
  background-color: $main-decor-color;
  &__info {
    position: absolute;
    bottom: 117px;
    left: 101px;
    border-radius: 10px;
    overflow: hidden;
    background: rgb(255, 255, 255);
    box-shadow: $box-shadow;
  }
}

@media (max-width: 768px) {
  .search-map {
    display: none;
  }
}
</style>

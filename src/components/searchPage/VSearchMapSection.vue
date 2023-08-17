<template>
  <section class="search-map">
    <VMap :coords="coords" :width="width" :height="height" />

    <div class="search-map__info">
      <VSearchMapProperties
        :id="id"
        :image="image"
        :name="name"
        :address="address"
        :properties="properties"
      />
    </div>
  </section>
</template>

<script>
import VMap from '@/components/general/VMap.vue'
import VSearchMapProperties from './VSearchMapProperties.vue'

export default {
  components: {
    VMap,
    VSearchMapProperties,
  },

  props: {
    coords: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    properties: {
      type: Object,
      required: true,
    },
    width: {
      type: String,
      default: '668px',
    },
    height: {
      type: String,
      default: '757px',
    },
  },
}
</script>

<style lang="scss" scoped>
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
    background: #ffffff;
    box-shadow: $box-shadow;
  }
}

@media (max-width: 1024px) {
  .search-map {
    &__info {
      left: 60px;
    }
  }
}

@media (max-width: 768px) {
  .search-map {
    display: none;
  }
}
</style>

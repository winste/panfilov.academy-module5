<template>
  <div class="map-container">
    <YandexMap :coordinates="coords" class="map">
      <YandexMarker :coordinates="coords" :marker-id="1" />
    </YandexMap>
  </div>
</template>

<script>
import { yandexMap, yandexMarker } from 'vue-yandex-maps'

export default {
  components: { yandexMap, yandexMarker },
  props: {
    coords: Array,
    width: String,
    height: String
  }
}
</script>
<style lang="scss" scoped>
.map {
  max-width: v-bind(width);
  height: v-bind(height);
}
</style>

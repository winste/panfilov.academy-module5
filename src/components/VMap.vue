<template>
  <div class="map-container">
    <YandexMap :coordinates="mapCoords" class="map">
      <YandexMarker :coordinates="mapCoords" :marker-id="1" />
    </YandexMap>
  </div>
</template>

<script>
import { yandexMap, yandexMarker } from 'vue-yandex-maps'

export default {
  components: { yandexMap, yandexMarker },
  props: {
    mapCoords: Array,
    mapWidth: String,
    mapHeight: String
  }
}
</script>
<style lang="scss" scoped>
.map {
  width: v-bind(mapWidth);
  height: v-bind(mapHeight);
}
</style>

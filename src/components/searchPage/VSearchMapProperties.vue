<template>
  <div class="map-properties">
    <img :src="image" alt="Hotel image" class="map-properties__image" />
    <div class="map-properties__info">
      <VCardTitleInfo
        :id="id"
        :name="name"
        :address="address"
        gap="6px"
        class="map-properties__title"
      />
      <VCardPropertiesInfo :properties="properties" :show-all="true" />
    </div>
  </div>
</template>

<script>
import VCardTitleInfo from '@/components/general/VCardTitleInfo.vue'
import VCardPropertiesInfo from '@/components/general/VCardPropertiesInfo.vue'

export default {
  components: {
    VCardTitleInfo,
    VCardPropertiesInfo,
  },

  props: {
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
  },
}
</script>

<style lang="scss" scoped>
.map-properties {
  display: flex;
  max-width: 485px;
  min-height: 160px;
  border-radius: 10px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: $box-shadow;
  &__image {
    max-width: 160px;
    min-height: 160px;
  }
  &__info {
    @include flexbox($direction: column, $gap: 19px);
    padding: 26px 16px;
  }
}

@media (max-width: 1024px) {
  .map-properties {
    max-width: 380px;
    min-height: auto;
    &__info {
      padding: 15px;
      gap: 10px;
    }
    &__image {
      max-width: 100px;
      min-height: auto;
    }
  }
}
</style>
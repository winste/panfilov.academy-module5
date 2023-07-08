<template>
  <div class="properties">
    <VCardPropertyInfo
      v-for="(count, name) in properties"
      :key="name"
      :count="count"
      :name="name"
    />
    <VCardPropertyInfo
      v-for="(count, name) in restProperties"
      :key="name"
      :count="count"
      :name="name"
    />
  </div>
</template>

<script>
import VCardPropertyInfo from './VCardPropertyInfo.vue'

export default {
  components: {
    VCardPropertyInfo,
  },

  props: {
    properties: { type: Object, required: true },
    showAll: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    restProperties() {
      const restPropertiesList = {
        parking: '0',
        pet: '0',
      }

      for (const property in restPropertiesList) {
        if (this.properties.hasOwnProperty(property)) delete restPropertiesList[property]
      }
      return restPropertiesList
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';

.properties {
  @include flexbox-general($gap: 20px);
}
</style>
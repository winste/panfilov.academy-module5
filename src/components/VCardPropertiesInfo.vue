<template>
  <div class="properties">
    <VCardPropertyInfo
      v-for="(count, name) in properties"
      :key="name"
      :count="count"
      :name="name"
    />

    <div v-if="showAll" class="properties__rest">
      <VCardPropertyInfo
        v-for="(count, name) in restProperties"
        :key="name"
        :count="count"
        :name="name"
      />
    </div>
  </div>
</template>

<script>
import VCardPropertyInfo from './VCardPropertyInfo.vue'

export default {
  components: {
    VCardPropertyInfo,
  },

  props: {
    properties: {
      type: Object,
      required: true,
    },
    showAll: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    // список свойств, которые будут отображены помимо основных
    restProperties() {
      const restPropertiesList = {
        parking: '0',
        pet: '0',
      }

      for (const property in restPropertiesList) {
        // если свойство есть в списке, пришедшего с сервера, то удяляем его
        if (this.properties.hasOwnProperty(property)) delete restPropertiesList[property]
      }
      return restPropertiesList
    },
  },
}
</script>

<style lang="scss" scoped>
.properties {
  @include flexbox($gap: 20px);
  &__rest {
    @include flexbox($gap: 20px);
  }
}
</style>
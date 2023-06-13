<template>
  <div class="properties">
    <VCardPropertyInfo v-for="(count, name) in properties" :count="count" :name="name" />
    <VCardPropertyInfo
      v-for="(count, name) in restProperties"
      v-if="showAll && !hasProperty(name)"
      :count="count"
      :name="name"
    />
  </div>
</template>

<script>
import AppIcon from './AppIcon.vue'
import VCardPropertyInfo from './VCardPropertyInfo.vue'

export default {
  components: {
    AppIcon,
    VCardPropertyInfo
  },

  data() {
    return {
      restProperties: {
        parking: '0',
        pet: '0'
      },
      name: ''
    }
  },

  props: {
    properties: Object,
    showAll: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    hasProperty(val) {
      return Object.entries(this.properties).includes(val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';

.properties {
  @include flexbox-general($gap: 20px);
}
</style>

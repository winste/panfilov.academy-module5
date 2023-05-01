<template>
  <VIcon
    v-if="getPathName == '/'"
    :iconName="logoIcon"
    :width="logoWidth"
    :height="logoHeight"
    class="logo"
  />
  <a v-else href="/" class="logo">
    <VIcon :iconName="logoIcon" :width="logoWidth" :height="logoHeight" />
  </a>
</template>
<script>
import VIcon from '@/components/VIcon.vue'
import Logo from '@/assets/images/Logo.svg'

export default {
  components: {
    VIcon
  },
  data() {
    return {
      logoIcon: Logo
    }
  },
  props: {
    logoWidth: {
      type: Number,
      default: 104
    },
    logoHeight: {
      type: Number,
      default: 30
    }
  },
  computed: {
    getPathName() {
      return window.location.pathname
    }
  }
}
</script>

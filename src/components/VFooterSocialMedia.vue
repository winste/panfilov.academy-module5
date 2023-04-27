<template>
  <div>
    <a href="https://www.facebook.com">
      <VIcon :iconName="iconFacebook" />
    </a>
    <a href="https://twitter.com">
      <VIcon :iconName="iconTwitter" />
    </a>
    <a href="https://www.instagram.com">
      <VIcon :iconName="iconInstagram" />
    </a>
    <a href="https://ru.linkedin.com">
      <VIcon :iconName="iconLinkedin" />
    </a>
  </div>
</template>

<script>
import VIcon from './VIcon.vue'
import Facebook from '@/assets/images/icons/Facebook.svg'
import Twitter from '@/assets/images/icons/Twitter.svg'
import Instagram from '@/assets/images/icons/Instagram.svg'
import Linkedin from '@/assets/images/icons/Linkedin.svg'

export default {
  components: {
    VIcon,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
  },
  data() {
    return {
      iconFacebook: Facebook,
      iconTwitter: Twitter,
      iconInstagram: Instagram,
      iconLinkedin: Linkedin
    }
  }
}
</script>

<style lang="scss" scoped></style>

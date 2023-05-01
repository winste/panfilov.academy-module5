<template>
  <div class="social">
    <a href="https://www.facebook.com" target="_blank" class="social__facebook">
      <VIcon :iconName="iconFacebook" :iconWidth="24" :iconHeight="24" />
    </a>
    <a href="https://twitter.com" target="_blank" class="social__twitter">
      <VIcon :iconName="iconTwitter" :iconWidth="27" :iconHeight="26" />
    </a>
    <a href="https://www.instagram.com" target="_blank" class="social__instagram">
      <VIcon :iconName="iconInstagram" :iconWidth="24" :iconHeight="24" />
    </a>
    <a href="https://ru.linkedin.com" target="_blank" class="social__linkedin">
      <VIcon :iconName="iconLinkedin" :iconWidth="24" :iconHeight="24" />
    </a>
  </div>
</template>

<script>
import VIcon from '@/components/VIcon.vue'
import Facebook from '@/assets/images/icons/Facebook.svg'
import Twitter from '@/assets/images/icons/Twitter.svg'
import Instagram from '@/assets/images/icons/Instagram.svg'
import Linkedin from '@/assets/images/icons/Linkedin.svg'

export default {
  components: {
    VIcon
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

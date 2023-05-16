<template>
  <div class="social">
    <a href="https://www.facebook.com" target="_blank" class="social__facebook">
      <AppButtonIcon :buttonIcon="iconFacebook" :buttonWidth="24" :buttonHeigh="24" />
    </a>
    <a href="https://twitter.com" target="_blank" class="social__twitter">
      <AppButtonIcon :buttonIcon="iconTwitter" :buttonWidth="27" :buttonHeigh="26" />
    </a>
    <a href="https://www.instagram.com" target="_blank" class="social__instagram">
      <AppButtonIcon :buttonIcon="iconInstagram" :buttonWidth="24" :buttonHeigh="24" />
    </a>
    <a href="https://ru.linkedin.com" target="_blank" class="social__linkedin">
      <AppButtonIcon :buttonIcon="iconLinkedin" :buttonWidth="24" :buttonHeigh="24" />
    </a>
  </div>
</template>

<script>
import Facebook from '@/assets/images/icons/Facebook.svg'
import Twitter from '@/assets/images/icons/Twitter.svg'
import Instagram from '@/assets/images/icons/Instagram.svg'
import Linkedin from '@/assets/images/icons/Linkedin.svg'
import AppButtonIcon from '@/components/AppButtonIcon.vue'

export default {
  components: {
    AppButtonIcon
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

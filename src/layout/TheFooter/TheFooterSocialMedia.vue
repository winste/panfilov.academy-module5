<template>
  <div class="social">
    <a href="https://www.facebook.com" target="_blank" class="social__facebook">
      <AppButtonIcon :icon="iconFacebook" :width="24" :height="24" />
    </a>
    <a href="https://twitter.com" target="_blank" class="social__twitter">
      <AppButtonIcon :icon="iconTwitter" :width="27" :height="26" />
    </a>
    <a href="https://www.instagram.com" target="_blank" class="social__instagram">
      <AppButtonIcon :icon="iconInstagram" :width="24" :height="24" />
    </a>
    <a href="https://ru.linkedin.com" target="_blank" class="social__linkedin">
      <AppButtonIcon :icon="iconLinkedin" :width="24" :height="24" />
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
    AppButtonIcon,
  },
  data() {
    return {
      iconFacebook: Facebook,
      iconTwitter: Twitter,
      iconInstagram: Instagram,
      iconLinkedin: Linkedin,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/flexbox-general';

.social {
  @include flexbox-general($gap: 24px);
  margin-top: 21px;
  margin-left: 1px;
}
</style>
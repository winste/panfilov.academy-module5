<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__about">
        <AppIcon :name="logoIcon" :width="148.5" :height="40" class="footer__logo" />
        <p class="footer__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div class="footer__stores">
          <TheFooterStoreLink
            url="https://play.google.com/store/"
            name="PlayStore"
            :icon="playstoreIcon"
            :iconWidth="22"
            :iconHeight="22"
          />
          <TheFooterStoreLink
            url="https://www.apple.com/app-store/"
            name="AppleStore"
            :icon="appstoreIcon"
            :iconWidth="24"
            :iconHeight="24"
          />
        </div>
      </div>

      <div class="footer__info">
        <TheFooterList title="COMPANY" :list="listAbout" class="footer__social-company" />
        <TheFooterList title="HELP CENTER" :list="listHelpCenter" class="footer__social-help" />
        <TheFooterList title="CONTACT INFO" :list="listContacts" class="footer__social-contacts">
          <TheFooterSocialMedia class="footer__social" />
        </TheFooterList>
      </div>
    </div>
    <div class="footer__copywrite">
      <p class="footer__copywrite-text">© 2022 thecreation.design | All rights raserved</p>
      <p class="footer__copywrite-text">
        Created with love by <span class="footer__copywrite-name">thecreation.design</span>
      </p>
    </div>
  </footer>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'
import Logo from '@/assets/images/Logo.svg'
import Appstore from '@/assets/images/icons/Appstore.svg'
import Playstore from '@/assets/images/icons/Playstore.svg'
import TheFooterList from './TheFooterList.vue'
import TheFooterSocialMedia from './TheFooterSocialMedia.vue'
import TheFooterStoreLink from './TheFooterStoreLink.vue'

export default {
  components: {
    AppIcon,
    TheFooterList,
    TheFooterSocialMedia,
    TheFooterStoreLink
  },
  data() {
    return {
      logoIcon: Logo,
      appstoreIcon: Appstore,
      playstoreIcon: Playstore,
      listAbout: [
        { name: 'About Us', href: '#' },
        { name: 'Legal Information', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Blogs', href: '#' }
      ],
      listHelpCenter: [
        { name: 'Find a Property', href: '#' },
        { name: 'How To Host?', href: '#' },
        { name: 'Why Us?', href: '#' },
        { name: 'FAQs', href: '#' },
        { name: 'Rental Guides', href: '#' }
      ],
      listContacts: [
        { name: 'Phone: 1234567890', href: '#' },
        { name: 'Email: company@email.com', href: '#' },
        { name: 'Location: 100 Smart Street, LA, USA', href: '#' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 83px 80px 30px 80px;
  background-color: rgba(239, 240, 242, 1);
  &__wrapper {
    display: flex;
    gap: 45px;
    padding-bottom: 199px;
  }
  &__about {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 31px;
  }
  &__logo {
    align-self: start;
    margin-left: 3px;
    margin-bottom: 4px;
  }
  &__text {
    font-size: 15px;
    line-height: 20px;
    color: rgb(154, 154, 154);
    margin-bottom: 13px;
  }
  &__stores {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
  }
  &__info {
    display: flex;
    gap: 55px;
    margin-top: 2px;
  }
  &__social {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 21px;
    margin-left: 1px;
    &-contacts {
      margin-left: 14px;
    }
  }
  &__copywrite {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    font-weight: 600;
    border-top: 1px solid rgb(224, 226, 230);
    &-name {
      font-weight: 700;
    }
  }
}
</style>

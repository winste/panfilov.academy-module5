<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__about">
        <a href="/" class="footer__logo">
          <VIcon :iconName="logoIcon" width="166" height="56" />
        </a>
        <p class="footer__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div class="footer__stores">
          <div class="footer__store">
            <a href="https://www.apple.com/app-store/" target="_blank" class="footer__store-link">
              <VIcon :iconName="appstoreIcon" width="22" height="22" />
              <p class="footer__store-name">PlayStore</p>
            </a>
          </div>
          <div class="footer__store">
            <a href="https://play.google.com/store/" target="_blank" class="footer__store-link">
              <VIcon :iconName="playstoreIcon" width="22" height="22" />
              <p class="footer__store-name">AppleStore</p>
            </a>
          </div>
        </div>
      </div>

      <div class="footer__info">
        <VFooterList itemsTitle="COMPANY" :itemsList="listAbout" />
        <VFooterList itemsTitle="HELP CENTER" :itemsList="listHelpCenter" />
        <VFooterList itemsTitle="CONTACT INFO" :itemsList="listContacts" />
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
import VIcon from './VIcon.vue'
import Logo from '@/assets/images/Logo.svg'
import Appstore from '@/assets/images/icons/Appstore.svg'
import Playstore from '@/assets/images/icons/Playstore.svg'
import VFooterList from './VFooterList.vue'

export default {
  components: {
    VIcon,
    VFooterList
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
  padding: 86px 80px 30px 80px;
  background-color: rgba(239, 240, 242, 1);
  &__wrapper {
    display: flex;
    gap: 48px;
    padding-bottom: 200px;
  }
  &__about {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 31px;
  }
  &__logo {
    align-self: start;
  }
  &__text {
    line-height: 20px;
    color: #9a9a9a;
  }
  &__stores {
    display: flex;
    gap: 13px;
  }
  &__store {
    background-color: rgba(224, 226, 230, 1);
    border-radius: 6px;
    &-link {
      display: flex;
      gap: 16.5px;
      padding: 15px 29px;
    }
  }
  &__info {
    display: flex;
    gap: 59px;
  }
  &__copywrite {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    font-weight: 600;
    border-top: 1px solid #e0e2e6;
    &-name {
      font-weight: 700;
    }
  }
}
</style>

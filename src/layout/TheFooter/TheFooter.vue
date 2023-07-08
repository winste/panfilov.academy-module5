<template>
  <footer id="footer" class="footer container-wrapper">
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
          />
          <TheFooterStoreLink
            url="https://www.apple.com/app-store/"
            name="AppleStore"
            :icon="appstoreIcon"
            :icon-width="24"
            :icon-height="24"
          />
        </div>
      </div>

      <TheFooterList class="footer__info" />
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
import TheFooterStoreLink from './TheFooterStoreLink.vue'

export default {
  components: {
    AppIcon,
    TheFooterList,
    TheFooterStoreLink,
  },
  data() {
    return {
      logoIcon: Logo,
      appstoreIcon: Appstore,
      playstoreIcon: Playstore,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-general';
@import '@/assets/scss/mixins/flexbox-direction';

.footer {
  padding-top: 83px;
  padding-bottom: 30px;
  background-color: $main-decor-color;
  &__wrapper {
    @include flexbox-general($gap: 45px);
    padding-bottom: 199px;
  }
  &__about {
    max-width: 380px;
    @include flexbox-direction($direction: column, $gap: 31px);
  }
  &__logo {
    align-self: start;
    margin-left: 3px;
    margin-bottom: 4px;
  }
  &__text {
    font-size: 15px;
    line-height: 20px;
    color: $secondary-font-color;
    margin-bottom: 13px;
  }
  &__stores {
    @include flexbox-general($gap: 13px);
  }
  &__info {
    margin-top: 2px;
  }
  &__copywrite {
    @include flexbox-general($gap: 20px);
    justify-content: space-between;
    font-weight: 600;
    border-top: 1px solid $card-bg-color;
    margin: 0 -80px;
    padding: 40px 79px 0 80px;
    &-name {
      font-weight: 700;
    }
  }
}

@media (max-width: 860px) {
  .footer {
    &__wrapper {
      padding-bottom: 50px;
    }
    &__info {
      gap: 20px;
    }
    &__social {
      &-contacts {
        margin-left: 0;
      }
    }
  }
}

@media (max-width: 480px) {
  .footer {
    &__wrapper {
      padding-bottom: 30px;
    }
    &__info {
      flex-direction: column;
      margin-left: 15px;
    }
  }
}
</style>
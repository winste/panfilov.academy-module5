<template>
  <div class="company-links">
    <TheFooterListColumn title="COMPANY" :list="listAbout" class="company-links__about" />
    <TheFooterListColumn title="HELP CENTER" :list="listHelpCenter" class="company-links__help" />
    <TheFooterListColumn
      title="CONTACT INFO"
      :list="listContacts"
      type-follow="link"
      class="company-links__contacts"
    >
      <TheFooterSocialMedia class="company-links__contacts-social" />
    </TheFooterListColumn>
  </div>
</template>

<script>
import TheFooterListColumn from './TheFooterListColumn.vue'
import TheFooterSocialMedia from './TheFooterSocialMedia.vue'

export default {
  components: {
    TheFooterListColumn,
    TheFooterSocialMedia,
  },

  data() {
    return {
      listAbout: [
        { name: 'About Us', href: '/about' },
        { name: 'Legal Information', href: '/legal' },
        { name: 'Contact Us', href: '/contacts' },
        { name: 'Blogs', href: '/blogs' },
      ],
      listHelpCenter: [
        { name: 'Find a Property', href: '/find' },
        { name: 'How To Host?', href: '/accommodation' },
        { name: 'Why Us?', href: '/advantages' },
        { name: 'FAQs', href: '/faq' },
        { name: 'Rental Guides', href: '/guides' },
      ],
      listContacts: [
        { name: 'Phone: 1234567890', href: 'tel:1234567890' },
        { name: 'Email: company@email.com', href: 'mailto:company@email.com' },
        {
          name: 'Location: 100 Smart Street, LA, USA',
          href: 'https://yandex.ru/maps/200/los-angeles/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-general';
@import '@/assets/scss/mixins/flexbox-direction';

.company-links {
  @include flexbox-general($gap: 55px);
  &__contacts {
    margin-left: 15px;
    &-social {
      margin-left: 0px;
    }
  }
}

@media (max-width: 480px) {
  .company-links {
    flex-direction: column;
    margin-left: 15px;
    &__contacts {
      margin-left: 0px;
    }
  }
}
</style>

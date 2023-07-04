<template>
  <section id="featured" class="featured-section">
    <h2 class="featured-section__title">Featured Properties on our Listing</h2>
    <div class="featured-section__cards">
      <VFeaturedSectionCard
        v-for="card in cards"
        :carouselCard="card"
        class="featured-section__card"
      >
        <VCardTitleInfo
          :id="card._id"
          :name="card.name"
          :address="card.address"
          nameSize="18px"
          gap="8px"
          class="featured-section__card-info"
        />

        <VCardPropertiesInfo :properties="card.info[0]" />
      </VFeaturedSectionCard>
    </div>
    <AppErrorMessage v-if="error" :msg="error" />
  </section>
</template>

<script>
import { api } from '@/api/api'
import VCardPropertyInfo from '@/components/VCardPropertyInfo.vue'
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import VCardPropertiesInfo from '@/components/VCardPropertiesInfo.vue'
import VFeaturedSectionCard from './VFeaturedSectionCard.vue'
import AppErrorMessage from '@/components/AppErrorMessage.vue'

export default {
  components: {
    VFeaturedSectionCard,
    VCardTitleInfo,
    VCardPropertyInfo,
    VCardPropertiesInfo,
    AppErrorMessage
  },
  data() {
    return {
      cards: [],
      error: null
    }
  },
  async created() {
    await api
      .fetchData('/hotel/featured')
      .then((response) => (this.cards = response.data))
      .catch((error) => (this.error = error))
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins/section-title';
@import '@/assets//scss/mixins/flexbox-general';
@import '@/assets//scss/mixins/flexbox-direction';

$cardSize: 382px;
.featured-section {
  &__title {
    @include section-title-style;
    margin-bottom: 81px;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax($cardSize, 1fr));
    grid-gap: 65px 32px;
    margin-right: -4px;
  }
  &__card {
    padding-left: 2px;
    &-info {
      margin-bottom: 14px;
    }
    &-properties {
      @include flexbox-general($gap: 21px);
    }
  }
}

@media (max-width: 480px) {
  .featured-section {
    &__cards {
      @include flexbox-direction($direction: column, $gap: 40px, $flexWrap: nowrap);
      align-items: center;
    }
  }
}
</style>

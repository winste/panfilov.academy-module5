<template>
  <VInfoSection class="latest-section" title="Latest on the Property Listing">
    <div class="latest-section__cards">
      <VLatestSectionCard
        v-for="(card, index) in cards"
        :key="index"
        :id="card._id"
        :urlAvatar="card.author.avatar"
        :urlBg="card.image"
        :name="card.name"
        :address="card.address"
      />
    </div>
  </VInfoSection>
</template>

<script>
import { api } from '../api/api'
import VInfoSection from './VInfoSection.vue'
import VLatestSectionCard from './VLatestSectionCard.vue'

export default {
  components: {
    VLatestSectionCard,
    VInfoSection
  },
  data() {
    return {
      cards: []
    }
  },
  async created() {
    await api.fetchData('/hotel/latest').then((response) => (this.cards = response.data))
  }
}
</script>

<style lang="scss">
.latest-section {
  &__cards {
    margin-top: 94px;
    display: flex;
    justify-content: space-between;
  }
}
</style>

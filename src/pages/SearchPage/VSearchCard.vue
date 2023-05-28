<template>
  <div v-if="hotelData !== null" class="search-card">
    <VCarousel
      :slides="hotelData.images"
      width="574px"
      height="382px"
      class="search-card__carousel"
    >
      <VCardHostInfo
        :avatar="hotelData.author.avatar"
        :name="hotelData.name"
        :price="hotelData.price"
      />
    </VCarousel>
    <div class="search-card__info">
      <VCardTitleInfo
        :id="id"
        :name="hotelData.name"
        :address="hotelData.address"
        class="search-card__title"
      />
      <VCardPropertyInfo :properties="hotelData.info" />
      <span class="search-card__period">
        <p class="search-card__type">{{ hotelData.type[0] }}</p>
        <p class="search-card__period-delimiter"></p>
        <p class="search-card__length">For {{ periodLength }} period: {{ hotelData.period[0] }}</p>
      </span>
    </div>
  </div>
</template>

<script>
import { api } from '@/api/api'
import VCarousel from '@/components/VCarousel.vue'
import VCardHostInfo from '@/components/VCardHostInfo.vue'
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import VCardPropertyInfo from '@/components/VCardPropertyInfo.vue'

export default {
  components: {
    VCarousel,
    VCardHostInfo,
    VCardTitleInfo,
    VCardPropertyInfo
  },
  props: {
    id: String
  },
  data() {
    return {
      hotelData: null
    }
  },
  async created() {
    await api
      .fetchData(`/hotel/detail/${this.id}`)
      .then((response) => (this.hotelData = response.data))
  },
  computed: {
    periodLength() {
      return this.hotelData.period[0].includes('month') ? 'Short' : 'Long'
    }
  }
}
</script>

<style lang="scss" scoped>
$border-radus: 16px;

.search-card {
  max-width: 574px;
  border-radius: $border-radus;
  box-shadow: 0px 0px 10px rgb(229, 229, 229);
  &__info {
    padding: 26px 20px;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__carousel {
    border-radius: $border-radus $border-radus 0 0;
  }
  &__period {
    display: flex;
    gap: 17px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: rgb(154, 154, 154);
    margin-top: 22px;
    &-delimiter {
      border-right: 1px solid rgb(224, 226, 230);
    }
  }
}
</style>

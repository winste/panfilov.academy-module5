<template>
  <div class="search-card">
    <div v-if="hotelData" class="search-card">
      <VCarousel
        :slides="hotelData.images"
        height="382px"
        block="search"
        class="search-card__carousel"
      >
        <VCardHostInfo
          :avatar="hotelData.author.avatar"
          :name="hotelData.author.name || hotelData.name"
          :price="hotelData.price"
        />
      </VCarousel>

      <div class="search-card__info">
        <VCardTitleInfo
          :id="id"
          :name="hotelData.name"
          :address="hotelData.address"
          gap="2px"
          class="search-card__title"
        />
        <VCardPropertiesInfo :properties="hotelData.info[0]" class="search-card__properties" />
        <span class="search-card__period">
          <p class="search-card__type">{{ hotelData.type[0] }}</p>
          <p class="search-card__period-delimiter"></p>
          <p class="search-card__length">
            For {{ periodLength }} period: {{ hotelData.period[0] }}
          </p>
        </span>
      </div>
      <AppErrorMessage v-if="error" :msg="error" />
    </div>
  </div>
</template>

<script>
import { api } from '@/api/api'
import VCarousel from '@/components/VCarousel.vue'
import VCardHostInfo from '@/components/VCardHostInfo.vue'
import VCardTitleInfo from '@/components/VCardTitleInfo.vue'
import VCardPropertiesInfo from '@/components/VCardPropertiesInfo.vue'
import AppErrorMessage from '@/components/AppErrorMessage.vue'

export default {
  components: {
    VCarousel,
    VCardHostInfo,
    VCardTitleInfo,
    VCardPropertiesInfo,
    AppErrorMessage,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      hotelData: null,
      error: null,
    }
  },

  computed: {
    periodLength() {
      return this.hotelData.period[0].includes('month') ? 'Short' : 'Long'
    },
  },

  async created() {
    await api
      .fetchData(`/hotel/detail/${this.id}`)
      .then((response) => (this.hotelData = response.data))
      .catch((error) => (this.error = error))
  },
}
</script>

<style lang="scss" scoped>
.search-card {
  min-width: 300px;
  max-width: 100%;
  border-radius: 16px;
  box-shadow: $box-shadow;
  &__info {
    padding: 31px 27px 22px 24px;
  }
  &__properties {
    margin-bottom: 18px;
  }
  &__title {
    margin-bottom: 20px;
  }
  &__carousel {
    border-radius: 16px 16px 0 0;
  }
  &__period {
    @include flexbox($gap: 17px);
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: $secondary-font-color;
    &-delimiter {
      border-right: 1px solid #e0e2e6;
    }
  }
}

@media (max-width: 480px) {
  .search-card {
    min-width: auto;
    &__info {
      padding: 20px;
    }
    &__period {
      gap: 5px;
      &-delimiter {
        display: none;
      }
    }
  }
}
</style>
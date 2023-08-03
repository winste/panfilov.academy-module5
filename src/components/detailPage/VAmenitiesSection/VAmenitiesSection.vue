<template>
  <section class="amenities">
    <h4 class="amenities__title">Offered Amenities</h4>
    <div class="amenities__list">
      <VAmenity v-for="amenity in amenitiesFormatted" :key="amenity.id" :amenity="amenity" />
    </div>

    <AppButtonShowMore :count="amenitiesCount" name="Amenities" @showAll="changeDisplayedValue" />
  </section>
</template>

<script>
import VAmenity from './VAmenity.vue'
import AppButtonShowMore from '@/components/general/AppButtonShowMore.vue'

export default {
  components: {
    VAmenity,
    AppButtonShowMore,
  },

  props: {
    amenities: {
      type: Array,
      required: true,
    },
    amenitiesDisplayedCount: {
      type: Number,
      default: 6,
    },
  },

  data() {
    return {
      showAllAmenities: null,
    }
  },

  computed: {
    amenitiesCount() {
      return this.amenities.length
    },
    amenitiesFormatted() {
      return this.showAllAmenities
        ? this.amenities
        : this.amenities.slice(0, this.amenitiesDisplayedCount)
    },
  },

  methods: {
    changeDisplayedValue(data) {
      this.showAllAmenities = data
    },
  },
}
</script>

<style lang="scss" scoped>
.amenities {
  margin-bottom: 56px;
  &__title {
    font-size: 20px;
    margin-bottom: 29px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min-content, 325px));
    gap: 17px 10px;
    padding-bottom: 41px;
  }
}

@media (max-width: 768px) {
  .amenities {
    &__list {
      grid-template-columns: repeat(auto-fill, minmax(min-content, 200px));
    }
  }
}
</style>
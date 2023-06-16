<template>
  <section class="amenities">
    <h4 class="amenities__title">Offered Amenities</h4>
    <div class="amenities__list">
      <VAmenity :amenitiesList="amenitiesListFormatted" />
    </div>

    <AppButtonShowMore
      @showAll="changeDisplayedValue"
      :count="amenitiesListCount"
      name="Amenities"
    />
  </section>
</template>

<script>
import VAmenity from './VAmenity.vue'
import AppButtonShowMore from '@/components/AppButtonShowMore.vue'

export default {
  components: {
    VAmenity,
    AppButtonShowMore
  },
  props: {
    amenitiesList: Array,
    amenitiesDisplayedCount: Number
  },
  data() {
    return {
      showAllAmenities: null
    }
  },
  computed: {
    amenitiesListCount() {
      return this.amenitiesList.length
    },
    amenitiesListFormatted() {
      return this.showAllAmenities
        ? this.amenitiesList
        : this.amenitiesList.slice(0, this.amenitiesDisplayedCount)
    }
  },
  methods: {
    changeDisplayedValue(data) {
      this.showAllAmenities = data
    }
  }
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
    $column-width: 325px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min-content, $column-width));
    gap: 17px 10px;
    padding-bottom: 41px;
  }
}

@media (max-width: 768px) {
  .amenities {
    &__list {
      $column-width: 200px;
      grid-template-columns: repeat(auto-fill, minmax(min-content, $column-width));
    }
  }
}
</style>

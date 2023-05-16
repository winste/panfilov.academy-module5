<template>
  <section class="amenities">
    <h4 class="amenities__title">Offered Amenities</h4>
    <div class="amenities__list">
      <VAmenity :amenitiesList="amenitiesListFormatted" />
    </div>

    <AppButtonShowMore
      @showAll="changeDisplayedValue"
      :listItemsCount="amenitiesListCount"
      listItemsName="Amenities"
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
    margin-bottom: 26px;
  }
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    padding-bottom: 41px;
  }
}
</style>

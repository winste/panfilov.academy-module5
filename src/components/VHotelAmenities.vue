<template>
  <section class="amenities">
    <h3 class="amenities__title">Offered Amenities</h3>
    <div class="amenities__list">
      <span v-for="(amenity, id) in amenitiesListFormatted" :key="id" class="amenities__item">
        <img :src="amenity.icon" alt="Icon amenities" class="amenities__image" />
        <p>{{ amenity.name }}</p>
      </span>
    </div>

    <VButtonShowMore
      @showAll="changeDisplayedValue"
      :listItemsCount="amenitiesListCount"
      listItemsName="Amenities"
    />
  </section>
</template>

<script>
import VButtonShowMore from './VButtonShowMore.vue'
import VIcon from './VIcon.vue'

export default {
  components: {
    VIcon,
    VButtonShowMore
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
$icon-size: 30px;

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
  &__item {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  &__image {
    max-width: $icon-size;
    max-height: $icon-size;
  }
}
</style>

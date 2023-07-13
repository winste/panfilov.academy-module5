<template>
  <div class="property">
    <div class="property__icon">
      <AppIcon :name="icon" :width="iconWidth" :height="44" />
    </div>
    <span class="property__text"> {{ count }} {{ name }} </span>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'

export default {
  components: {
    AppIcon,
  },

  props: {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },

  computed: {
    iconWidth() {
      return this.name == 'Bedrooms' ? 47 : 38
    },
    iconMargin() {
      return this.name == 'Bedrooms' ? '1px' : '13px'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-center';

$property-width: 176px;
$property-height: 160px;

.property {
  @include flexbox-center;
  flex-direction: column;
  min-width: $property-width;
  min-height: $property-height;
  background-color: $main-decor-color;
  border-radius: 8px;
  &__icon {
    margin-left: v-bind(iconMargin);
    margin-bottom: 8px;
  }
  &__text {
    margin-bottom: 2px;
  }
}

@media (max-width: 480px) {
  .property {
    min-width: 120px;
    min-height: 130px;
  }
}
</style>
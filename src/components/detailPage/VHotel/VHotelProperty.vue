<template>
  <div class="property">
    <div class="property__icon">
      <AppIcon :name="icon" :width="iconWidth" :height="44" />
    </div>
    <span class="property__text"> {{ count }} {{ name }} </span>
  </div>
</template>

<script>
import AppIcon from '@/components/general/AppIcon.vue'

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
.property {
  @include flexbox(
    $direction: column,
    $align-items: center,
    $justify-content: center
  );
  min-width: 176px;
  min-height: 160px;
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

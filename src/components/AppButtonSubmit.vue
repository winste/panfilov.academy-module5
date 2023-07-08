<template>
  <button type="submit" class="button-submit">
    <AppIcon :name="icon" :width="iconWidth" :height="iconHeight" class="button-submit__icon" />
  </button>
</template>

<script>
import AppIcon from './AppIcon.vue'

export default {
  components: {
    AppIcon,
  },
  props: {
    size: {
      type: String,
      default: '52px',
    },
    icon: String,
    iconWidth: Number,
    iconHeight: Number,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/button-hover';

.button-submit {
  width: v-bind(size);
  height: v-bind(size);
  background-color: $main-font-color;
  border-radius: 50%;
  @include button-hover;
  &__icon {
    margin-top: 6px;
  }
}
</style>

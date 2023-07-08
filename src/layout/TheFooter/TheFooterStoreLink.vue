<template>
  <div class="store">
    <a :href="url" target="_blank" class="store__link">
      <AppIcon :name="icon" :width="iconWidth" :height="iconHeight" class="store__icon" />
      <p class="store__name" v-text="name"></p>
    </a>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon.vue'

export default {
  components: {
    AppIcon,
  },
  props: {
    url: { type: String, required: true },
    name: { type: String, required: true },
    icon: { type: String, required: true },
    iconWidth: { type: Number, default: 22 },
    iconHeight: { type: Number, default: 22 },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-general';
@import '@/assets/scss/mixins/button-hover';

.store {
  background-color: $card-bg-color;
  border-radius: 6px;
  width: 172px;
  height: 52px;
  &__name {
    font-size: 15px;
    font-weight: 600;
    margin-top: 2px;
  }
  &__link {
    @include flexbox-general($gap: 15px);
    justify-content: center;
    padding: 15px 15px 13px 13px;
    &:hover {
      @include button-hover;
    }
  }
}
</style>
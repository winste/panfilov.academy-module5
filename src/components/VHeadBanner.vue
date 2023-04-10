<template>
  <section class="banner">
    <img
      v-if="bannersImages"
      :src="bannersImages.main.image"
      class="banner__image banner__image-main"
      alt="Banner"
    >
    <VBannerForm />
  </section>
</template>

<script>
import VBannerForm from '@/components/VBannerForm.vue'
import { api } from '@/api/api.js'

export default {
  components: {
    VBannerForm
  },
  data() {
    return {
      bannersImages: null,
    }
  },
  async mounted() {
    await api.fetchData("/banners")
        .then(response => this.bannersImages = response.data)
  }
}

</script>

<style lang="scss" scoped>
$bgcolor: rgba(239, 240, 242, 1);
$textcolor: rgba(232, 234, 236, 1);

.banner {
  position: relative;
  height: 591px;
  background-color: $bgcolor;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  &__text {
    font-weight: 800;
    font-size: 120px;
    color: $textcolor;
    text-transform: uppercase;
    margin-bottom: 93px;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &-main {
      position: absolute;
    }
  }
}
</style>

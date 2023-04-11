<template>
  <section class="banner">
    <img
      v-if="bannersImages"
      :src="bannersImages.main.image"
      class="banner__image banner__image-main"
      alt="Banner"
    />
    <VSearchBar />
  </section>
</template>

<script>
import { api } from "@/api/api.js";
import VSearchBar from "./VSearchBar.vue";

export default {
  components: {
    VSearchBar,
  },
  data() {
    return {
      bannersImages: null,
    };
  },
  async mounted() {
    await api
      .fetchData("/banners")
      .then((response) => (this.bannersImages = response.data));
  },
};
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

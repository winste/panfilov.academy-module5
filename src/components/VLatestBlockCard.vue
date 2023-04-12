<template>
  <a :href="detailCardLink">
    <div class="latestCard" :style="backgroundImageInlineStyle">
      <VIcon :nameIcon="icon" width="26" height="23" class="latestCard__avatar" />

      <div class="latestCard__content">
        <VAvatar :src="urlAvatar" />
        <h4 class="latestCard__name">
          {{ name }}
        </h4>
        <p class="latestCard__address">
          {{ address }}
        </p>
      </div>
    </div>
  </a>
</template>

<script>
import LikeIcon from "@/assets/images/LikeIcon.svg";
import VIcon from "./VIcon.vue";
import VAvatar from "./VAvatar.vue";
export default {
  components: {
    LikeIcon,
    VIcon,
    VAvatar,
  },
  data() {
    return {
      icon: LikeIcon,
    };
  },
  props: {
    id: String,
    urlAvatar: String,
    urlBg: String,
    name: String,
    address: String,
  },
  computed: {
    backgroundImageInlineStyle() {
      return `background-image: url("${this.urlBg}");`;
    },
    detailCardLink() {
      return `/hotel/detail/${this.id}`;
    },
  },
};
</script>

<style lang="scss">
.latestCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 279px;
  height: 340px;
  padding: 18px 21px;
  background-color: rgba(224, 226, 230, 1);
  border-radius: 8px;
  background-position: center;
  background-repeat: no-repeat;
  &__avatar {
    align-self: end;
  }
  &__name {
    margin-top: 15px;
  }
}
</style>

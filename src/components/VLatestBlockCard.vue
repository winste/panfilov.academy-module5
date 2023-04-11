<template>
  <div class="latestCard">
    <VIcon :nameIcon="icon" class="latestCard__avatar" />
    <VAvatar :src="src" />
    <h4 class="latestCard__name">
      {{ name }}
    </h4>
    <p class="latestCard__address">
      {{ address }}
    </p>
  </div>
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
    src: String,
    name: String,
    address: String,
  },
};
</script>

<style lang="scss">
.latestCard {
  width: 279px;
  height: 340px;
  background-color: rgba(224, 226, 230, 1);
  border-radius: 8px;
}
</style>

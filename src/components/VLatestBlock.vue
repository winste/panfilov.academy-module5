<template>
  <section class="latest">
    <h2 class="latest__title">Latest on the Property Listing</h2>
    <div class="cards">
      <VLatestBlockCard
        v-for="(card, index) in cards"
        :key="index"
        :id="card._id"
        :urlAvatar="card.author.avatar"
        :urlBg="card.image"
        :name="card.name"
        :address="card.address"
        class="latest__cards"
      />
    </div>
  </section>
</template>

<script>
import { api } from "../api/api";
import VLatestBlockCard from "./VLatestBlockCard.vue";

export default {
  components: {
    VLatestBlockCard,
  },
  data() {
    return {
      cards: [],
    };
  },
  async mounted() {
    await api.fetchData("/hotel/latest").then((response) => (this.cards = response.data));
    console.log(this.cards);
  },
};
</script>

<style lang="scss">
.cards {
  display: flex;
  justify-content: space-between;
}
</style>

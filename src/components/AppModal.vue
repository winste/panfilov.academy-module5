<template>
  <Modal v-model="isShow" :close="closeModal">
    <div class="modal">
      <button class="modal__button" @click="closeModal">X</button>
      <p class="modal__text" v-text="text"></p>
    </div>
  </Modal>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isShow: false,
    }
  },

  methods: {
    showModal() {
      this.isShow = true
    },

    closeModal() {
      this.isShow = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/const';
@import '@/assets/scss/mixins/flexbox-direction';
.modal {
  padding: 20px;
  background-color: $main-decor-color;
  color: $main-font-color;
  border-radius: 12px;
  min-height: 200px;
  @include flexbox-direction($direction: column, $gap: 15px);
  &__button {
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 20px;
    background-color: transparent;
    align-self: end;
  }
  &__text {
    padding: 20px;
  }
}
</style>
<template>
  <div class="product-container">
    <img class="product-image" :src="imgUrl" alt="" />
    <div class="details-wrap">
      <h3>{{ item.name }}</h3>
      <p>Rp.{{ item.price }}</p>
    </div>
    <button
      class="remove-button"
      @click="$emit('remove-item', item.code)"
    >
      Remove
    </button>
  </div>
</template>

<script>
import CONFIG from '../globals/config';

export default {
  props: ['item'],
  computed: {
    imgUrl() {
      return `${CONFIG.BASE_IMAGE_URL}${this.item.imageUrl}`;
    },
  },
};
</script>

<style scoped>
.product-container {
  align-content: center;
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>

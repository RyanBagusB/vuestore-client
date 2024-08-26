<template>
  <div class="product-item">
    <img :src="imgUrl" alt="" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-price">{{ product.price }}</p>
    <router-link :to="{ name: 'productdetail', params: { id: product.code } }">
      <button>Detail</button>
    </router-link>
  </div>
</template>

<script>
import CONFIG from '../globals/config';

export default {
  props: ['product'],
  computed: {
    imgUrl() {
      return `${CONFIG.BASE_IMAGE_URL}${this.product.imageUrl}`;
    },
  },
};
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
}

.product-name {
  margin-bottom: 0;
}

img {
  height: 200px;
  width: 200px;
  border-radius: 5%;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
</style>

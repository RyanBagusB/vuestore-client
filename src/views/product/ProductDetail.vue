<template>
  <div>
    <div id="page-wrap" v-if="product">
      <div id="img-wrap">
        <img :src="product.imageUrl" alt="" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">{{ product.price }}</h3>
        <p id="rating">average rating: {{ product.averageRating }}</p>
        <button id="add-to-cart" @click="addToCart(product.code)">Add To Cart</button>
        <p>deskripsi {{ product.description }}</p>
      </div>
    </div>
    <NotFound v-else />
  </div>
</template>

<script>
import axios from 'axios';
import NotFound from '../errors/NotFound.vue';
import CONFIG from '../../globals/config';

export default {
  components: {
    NotFound,
  },
  methods: {
    async addToCart(productCode) {
      const url = `${CONFIG.BASE_URL}api/orders/user/1/add`;
      await axios.post(url, { product: productCode });
    },
  },
  data() {
    return {
      product: {},
    };
  },
  async created() {
    const code = this.$route.params.id;
    const url = `${CONFIG.BASE_URL}api/products/${code}`;
    const product = await axios.get(url);
    this.product = product.data;
    this.product.imageUrl = `
      ${CONFIG.BASE_IMAGE_URL}${this.product.imageUrl}
    `;
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 100%;
  max-width: 400px;
  height: auto;
}

#product-details {
  padding: 16px;
  position: relative;
  background-color: #f9f9f9;
  border-radius: 8px;
}

#add-to-cart {
  width: 100%;
  padding: 10px;
  margin-top: 16px;
  background-color: #175c40;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>

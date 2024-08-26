<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">
        <ProductItem
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductItem from '../../components/ProductItem.vue';
import CONFIG from '../../globals/config';

const url = `${CONFIG.BASE_URL}api/products/`;

export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const products = await axios.get(url);
    this.products = products.data;
  },
};
</script>

<style scoped>
  .grid-wrap {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 16px;
    gap: 16px;
  }

  @media screen and (min-width: 800px) {
    .grid-wrap {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1000px) {
    .grid-wrap {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>

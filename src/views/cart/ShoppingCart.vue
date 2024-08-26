<template>
  <div>
    <h1>Shopping Cart</h1>
    <CartItem
      v-for="item in cartItems"
      :key="item.id"
      :item="item"
      @remove-item="removeFromCart"
    />
    <h3 id="total-price">Total: Rp.{{ totalPrice }}</h3>
    <button id="checkout-button">Checkout</button>
  </div>
</template>

<script>
import axios from 'axios';
import CartItem from '../../components/CartItem.vue';
import CONFIG from '../../globals/config';

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      cartItems: [],
    };
  },
  async created() {
    const url = `${CONFIG.BASE_URL}api/orders/user/1`;
    const result = await axios.get(url);
    this.cartItems = result.data[0].products;
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
  methods: {
    async removeFromCart(code) {
      const url = `${CONFIG.BASE_URL}api/orders/user/1/product/${code}`;
      await axios.delete(url);
      this.cartItems = this.cartItems.filter((item) => item.code !== code);
    },
  },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid #41B883;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}
#checkout-button {
  width: 100%;
}
#total-price {
  padding: 32px;
  text-align: right;
}
</style>

<template>
  <div id="nav-bar">
    <router-link id="products-link" :to="{ name: 'products' }">
      <h1>Vuestore</h1>
    </router-link>
    <router-link id="cart-link" :to="cartLink">
      <button>{{ cartButtonText }}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    cartButtonText() {
      return this.$route.name === 'shoppingcart' ? 'Back' : 'Cart';
    },
    cartLink() {
      return this.$route.name === 'shoppingcart' ? { name: 'products' } : { name: 'shoppingcart' };
    },
  },
};
</script>

<style scoped>
  #nav-bar {
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
  }
  #products-link {
    text-align: center;
    display: block;
    color: #41B883;
    font-size: 22px;
    left: 32px;
    position: absolute;
    top: 16px;
    text-decoration: none;
  }
  #products-link h1 {
    margin: 0;
  }
  #cart-link {
    position: absolute;
    right: 16px;
    top: 16px;
  }
</style>

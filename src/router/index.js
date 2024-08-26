import { createRouter, createWebHistory } from 'vue-router';

import Product from '../views/product/ProductsPage.vue';
import ProductDetail from '../views/product/ProductDetail.vue';
import ShoppingCart from '../views/cart/ShoppingCart.vue';
import NotFound from '../views/errors/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'products',
    component: Product,
  },
  {
    path: '/products/:id',
    name: 'productdetail',
    component: ProductDetail,
  },
  {
    path: '/cart',
    name: 'shoppingcart',
    component: ShoppingCart,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

<template>
  <div>
    <h1>Products</h1>

    <cart v-bind:items="cartItems" v-on:clear-cart="clearCart()" />

    <div class="list">
      <div class="item" v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <img :src="product.image" />
        <span>€{{ product.price }}</span>
        <v-button v-on:handle-click="addToCart(product.id)"
          >Add to cart</v-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Cart from "@/components/Cart.vue";
import { mapState } from "vuex";

export default {
  name: "ProductList",
  components: {
    "v-button": Button,
    cart: Cart,
  },
  computed: {
    ...mapState({
      products: (state) => state.products.all,
      cartItems: (state) => state.cart.items,
    }),
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch(
        "cart/addToCart",
        this.products.find((product) => product.id === id)
      );
    },
    clearCart() {
      this.$store.dispatch("cart/clearCart");
    },
  },
  created() {
    this.$store.dispatch("products/fetchAllProducts");
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f2f7ff;
}

.item {
  width: 300px;
  margin: 24px;
  padding: 12px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #fff;
}

.item img {
  width: 200px;
  height: 200px;
  object-fit: contain;
}

.item span {
  display: block;
}
</style>

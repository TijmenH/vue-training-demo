<template>
  <div class="cart" v-show="items.length">
    <div class="cart-head">
      <div class="cart-head-item size-50">Product name</div>
      <div class="cart-head-item size-15">Amount</div>
      <div class="cart-head-item size-15">Price</div>
      <div class="cart-head-item size-20">Total</div>
    </div>
    <div class="cart-body">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <div class="cart-data size-50">{{ item.name }}</div>
        <div class="cart-data size-15">{{ item.amount }}</div>
        <div class="cart-data size-15">€{{ item.price }}</div>
        <div class="cart-data size-20">€{{ item.price * item.amount }}</div>
      </div>

      <div>Total: €{{total}}</div>
    </div>

    <v-button v-on:handle-click="$emit('clear-cart')">Clear cart</v-button>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Cart",
  components: { "v-button": Button },
  computed: {
    total() {
      return this.items
        .map((item) => item.price * item.amount)
        .reduce((acc, curr) => acc + curr, 0);
    },
  },
  props: {
    items: Array,
  },
};
</script>

<style scoped>
.cart {
  margin: 24px auto;
  width: 600px;
  text-align: left;
}

.cart-body {
  margin: 12px 0;
}

.cart .cart-head {
  font-weight: 600;
  display: flex;
  flex-direction: row;
}

.cart .cart-item {
  display: flex;
  flex-direction: row;
}

.cart .size-15 {
  width: 15%;
}

.cart .size-20 {
  width: 20%;
}

.cart .size-50 {
  width: 50%;
}
</style>
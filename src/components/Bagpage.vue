<template>
  <div>
    <Navbar />
    <div class="row col-sm-12" v-for="productData in cartItems" :key="productData._id">
      <div class="col-sm-2">
        <img
          class="card-img-top mt-2"
          v-bind:src="productData.productImage"
          alt="Card image cap"
          style="max-height: 700px; max-width: 127.135px;margin: auto"
        />
      </div>
      <div class="col-sm-10">
        <h6 class="card-text">{{ productData.productName }}</h6>
        <h4 class="card-text">{{ productData.productPrice }}</h4>
      </div>
    </div>
    <button class="btn btn-primary m-4" @click="checkoutPage()">Checkout</button>
  </div>
</template>
<script>
import Navbar from "./Navbar";

export default {
  name: "Mobiles",
  components: {
    Navbar
  },
  data() {
    return {
      cartItems: []
    };
  },
  methods: {
    checkoutPage() {
      this.$router.push("/checkout");
    },
    getBagData() {
      this.cartItems = localStorage.getItem("cart");
      this.cartItems = JSON.parse(this.cartItems);
    }
  },
  mounted() {
    this.getBagData();
  }
};
</script>


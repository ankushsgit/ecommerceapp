<template>
  <div>
    <Navbar />
    <div class="row mx-2 my-2">
      <div
        class="col-md-3 outerview"
        v-for="laptopData in productsList"
        :key="laptopData.id"
      >
        <div class="cardTemplate outer1">
          <div class="card mb-4 outer2">
            <img
              class="card-img-top mt-2"
              v-bind:src="laptopData.productImage"
              alt="Card image cap"
              style="max-height: 700px; max-width: 127.135px;margin: auto"
            />
            <div class="card-body">
              <h6 class="card-text">{{ laptopData.productName }}</h6>
              <h4 class="card-text">{{ laptopData.productPrice }}</h4>
              <p class="card-text">{{ laptopData.productDescription }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="navigateProductDetail(laptopData)"
                  >
                    View
                  </button>
                  <button
                    v-if="!laptopData.isAdded"
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="addToCart(laptopData)"
                  >
                    Add to Cart
                  </button>
                  <button
                    class="btn btn-sm btn-outline-secondary"
                    disabled
                    v-else
                  >
                    Added
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Navbar from "./Navbar";

export default {
  name: "Laptops",
  components: {
    Navbar,
  },
  data() {
    return {
      productsList: [],
    };
  },
  watch: {
    "$store.state.itemStore.item": function() {
      this.productsList.map((item) => {
        item.id == this.$store.state.itemStore.item.id
          ? (item.isAdded = false)
          : console.log("do nothing");
      });
      this.productsList = [...this.productsList];
    },
  },
  methods: {
    addToCart(data) {
      let localCartData = localStorage.getItem("cart");
      localCartData
        ? (localCartData = JSON.parse(localCartData))
        : (localCartData = []);
      let duplicate = localCartData.some((item) => item.id === data.id);
      !duplicate ? localCartData.push(data) : console.log("duplicate entry");
      localStorage.setItem("cart", JSON.stringify(localCartData));
      localStorage.setItem("cartCount", localCartData.length.toString());
      this.$store.commit("cartCount", localCartData.length.toString());
      this.productsList.map((item) => {
        item.id == data.id ? (item.isAdded = true) : console.log("do nothing");
      });
      this.productsList = [...this.productsList];
    },
        checkAddedProducts() {
      let added = localStorage.getItem("cart");
      added = JSON.parse(added);
      this.productsList.map((item) => (item.isAdded = false));
      this.productsList.map((item) => {
        added.map((subItem) => {
          item.id == subItem.id
            ? (item.isAdded = true)
            : console.log("do nothing");
        });
      });
    },
    async laptopsData() {
      let laptops = await axios.get("http://localhost:3000/laptops");
      this.productsList = laptops.data;
      this.checkAddedProducts();
    },
    navigateProductDetail(data) {
      this.$router.push({
        name: "productDetails",
        params: { id: data.id },
      });
    },
  },
  mounted() {
    this.laptopsData();
  },
};
</script>

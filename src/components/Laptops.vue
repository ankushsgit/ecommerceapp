<template>
  <div>
    <Navbar />
    <div class="row">
      <div
        class="col-md-3"
        v-for="laptopData in laptopList"
        :key="laptopData._id"
      >
        <div class="cardTemplate">
          <div class="card mb-4 shadow-sm">
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
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="addToCart(laptopData)"
                  >
                    Add to Cart
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
      laptopList: [],
    };
  },
  methods: {
    addToCart(data) {
      let localCartData = localStorage.getItem("cart");
      localCartData
        ? (localCartData = JSON.parse(localCartData))
        : (localCartData = []);
      let duplicate = localCartData.some((item) => item._id === data._id);
      !duplicate ? localCartData.push(data) : console.log("duplicate entry");
      localStorage.setItem("cart", JSON.stringify(localCartData));
      localStorage.setItem("cartCount", localCartData.length.toString());
      window.dispatchEvent(
        new CustomEvent("count-changed", {
          count: localCartData.length.toString(),
        })
      );
    },

    getMobilesData() {
      axios
        .get("laptops.json")
        .then((response) => (this.laptopList = response.data));
    },
    navigateProductDetail(data) {
      this.$router.push({
        name: "productDetails",
        params: { id: data._id },
      });
    },
  },
  mounted() {
    this.getMobilesData();
  },
};
</script>

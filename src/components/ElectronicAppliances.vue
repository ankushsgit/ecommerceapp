<template>
  <div>
    <Navbar />
    <div class="row">
      <div
        class="col-md-3"
        v-for="productData in productsList"
        :key="productData.id"
      >
        <div class="cardTemplate">
          <div class="card mb-4 shadow-sm">
            <img
              class="card-img-top mt-2"
              v-bind:src="productData.productImage"
              alt="Card image cap"
              style="max-height: 700px; max-width: 127.135px;margin: auto"
            />
            <div class="card-body">
              <h6 class="card-text">{{ productData.productName }}</h6>
              <h4 class="card-text">{{ productData.productPrice }}</h4>
              <p class="card-text">{{ productData.productDescription }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="navigateProductDetail(productData)"
                  >
                    View
                  </button>
                    <button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"

                    v-on:click="addToCart(productData)"
                  >
                    Add to Cart
                  </button>
                </div>
                <!-- <small class="text-muted footerIcons">
                  <a href="javascript:;;" class="p-2">
                    <i class="fa fa-heart"></i>
                  </a>
                  <a
                    href="javascript:;;"
                    class="p-2"
                    v-on:click="addToCart(productData)"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </small> -->
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
  name: "ElectronicAppliances",
  components: {
    Navbar,
  },
  data() {
    return {
      productsList: [],
      cartData:[]
    };
  },
  methods: {
  addToCart(data) {
      
      this.cartData.push(data)
      this.cartCount = this.cartCount+1;
      localStorage.setItem('cart',JSON.stringify(this.cartData));
      localStorage.setItem('cartCount',JSON.stringify(this.cartCount));
      this.$bvToast.toast(" Added Cart Successful.....", {
        title: "Add to cart",
        autoHideDelay: 3000,
      });
      this.$emit('cart-count', this.cartCount)
      console.log(this.cartCount +"cartCount and data "+data);
    },
    getElectronicesData() {
      axios
        .get("electronics.json")
        .then((response) => (this.productsList = response.data));
    },
    navigateProductDetail(data) {
      this.$router.push({
        name: "productDetails",
        params: { id: data._id },
      });
    },
  },
  mounted() {
    this.getElectronicesData();
  },
};
</script>

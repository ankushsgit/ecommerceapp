<template>
  <div>
    <Topnav />
    <Sidenav />
    <div class="product-details mt-4">
      <div class="container">
        <div class="row mb-3">
          <div class="col-sm-4">
            <div class="product-image">
              <div class="view hm-zoom z-depth-2" style="cursor: pointer">
                <img :src="productData.productImage" width="200px" height="400px" />
              </div>
              <div class style="margin-top: 15px">
                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Product Price</h6>
                    </div>
                    <span class="text-muted" style="color: crimson !important">{{ productData.productPrice }}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Product Seller</h6>
                    </div>
                    <span class="text-muted" style="color: crimson !important">{{ productData.productSeller }}</span>
                  </li>
                </ul>
                <button class="btn btn-primary" v-on:click="addToCart(productData)" v-if="!this.isAdded">
                  Add to Cart
                </button>
                <button class="btn btn-secondary" disabled v-else>Added</button>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="product-detail">
              <h5 class="product-head">Product Details</h5>
              <table class="table" cellspacing="0" style="max-height: 28px">
                <tbody>
                  <tr>
                    <th scope="row">Product Name</th>
                    <td>{{ productData.productName }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Product Description</th>
                    <td>{{ productData.productDescription }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Product Category</th>
                    <td>{{ productData.productCategory }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Product Rating</th>
                    <td>
                      <div>
                        <b-form-rating v-model="productData.productRating"></b-form-rating>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Topnav from "./Topnav.vue";
import Sidenav from "./Sidenav.vue";

export default {
  name: "ProductDetail",
  components: {
    Topnav,
    Sidenav,
  },
  data() {
    return {
      productData: {},
      productId: this.$route.params.id,
      allProducts: [],
      isAdded: null,
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.productId = to.params.id;
      let productsArrayFunction = this.productsData.bind(this);
      productsArrayFunction();
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
      this.checkAddedProducts();
    },
    async productsData() {
      let [mobiles, laptops, appliances] = await Promise.all([
        axios.get("http://localhost:3000/mobiles"),
        axios.get("http://localhost:3000/laptops"),
        axios.get("http://localhost:3000/electronics"),
      ]);
      this.allProducts = mobiles.data.concat(laptops.data, appliances.data);
      this.productData = this.allProducts.find((el) => el.id == this.productId);
    },
    checkAddedProducts() {
      let added = localStorage.getItem("cart");
      added = JSON.parse(added);
      let isAdded = added.find((item) => item.id == this.$route.params.id);
      isAdded ? (this.isAdded = true) : false;
    },
  },
  mounted() {
    let productsArrayFunction = this.productsData.bind(this);
    productsArrayFunction();
    // show added if added
    this.checkAddedProducts();
  },
};
</script>

<style>
.product-detail {
  text-align: start;
}

.product-detail .product-head {
  padding: 10px;
  font-weight: 500;
}

.product-detail .table th {
  width: 152px;
}

.product-ship {
  height: 15rem;
}

.stars-outer {
  display: inline-block;
  position: relative;
  font-family: FontAwesome;
}

.stars-outer::before {
  content: "\f006 \f006 \f006 \f006 \f006";
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
}

.stars-inner::before {
  content: "\f005 \f005 \f005 \f005 \f005";
  color: #f8ce0b;
}
</style>

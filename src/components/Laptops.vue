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
                </div>
                <small class="text-muted footerIcons">
                  <a href="javascript:;;" class="p-2">
                    <i class="fa fa-heart"></i>
                  </a>
                  <a
                    href="javascript:;;"
                    class="p-2"
                    v-on:click="addToCart(item)"
                  >
                    <i class="fa fa-shopping-cart"></i>
                  </a>
                </small>
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

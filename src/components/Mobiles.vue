<template>
<div>
    <Navbar></Navbar>
  <!-- <button v-on:click="getMobilesData">Mobiles</button> -->
  <router-view></router-view>
  <div class="row">
    <div class="col-md-3" v-for="mobileData in mobileList" :key="mobileData.id">
    <div class="cardTemplate">
      <div class="card mb-4 shadow-sm">
        <img
          class="card-img-top mt-2"
          v-bind:src="mobileData.mobileImage"
          alt="Card image cap"
          style="max-height: 700px; max-width: 127.135px;margin: auto"
        >
        <div class="card-body">
          <h6 class="card-text">{{mobileData.mobileName}}</h6>
          <h4 class="card-text">{{mobileData.mobilePrice}}</h4>
          <p class="card-text">{{mobileData.mobileDescription}}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                v-on:click="navigateProductDetail(item)"
              >View</button>
              
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                v-on:click="updateEditProduct(item, item._id)"
                v-if="loggedUser && loggedUser.isAdmin"
              >Edit</button>
            </div>
            <small class="text-muted footerIcons">
              <a href="javascript:;;" class="p-2">
                <i class="fa fa-heart"></i>
              </a>
              <a href="javascript:;;" class="p-2" v-on:click="addToCart(item)">
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
export default {
  name: "Mobiles",
  data() {
    return {
      mobileList: []
    };
  },
  methods: {
    getMobilesData() {
      axios
        .get("mobiles.json")
        .then(response => (this.mobileList = response.data));
    }
  },
  mounted(){
    this.getMobilesData();
  }
};
</script>
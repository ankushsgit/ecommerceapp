<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-button v-b-toggle.sidebar-no-header>
        <b-icon icon="list" variant="primary"></b-icon>
      </b-button>
      <b-navbar-brand to="/home" class="ml-3">Amazon.in</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-6 mr-5" placeholder="Search" type="text" v-model="query" @keyup="searchProduct" ></b-form-input>
            <li class="autocomplete-result" v-for="product in searchResults" :key="product.id" @click="showProduct(product)" >
                <small> {{ product.productName }} in {{ product.productCategory }}</small>
            </li>
          </b-nav-form>


          <b-avatar :badge="showCartCount()" variant="" badge-variant="warning" src="https://cdn4.iconfinder.com/data/icons/shopping-35/24/Cart-1-512.png"> </b-avatar>

          <b-nav-item-dropdown class="mx-2" right>
          <span v-if="cartItems.length > 0">
          <b-dropdown-item v-for="item in cartItems" :key="item.id">
            <span @click.stop="goToProductView(item)">
            {{item.productName}}
            </span>
            <span @click.stop="removeItemFromCart(item)">
              <b-icon icon="trash"></b-icon>
            </span>
          </b-dropdown-item>
          </span>
          <span v-else>
            <b-dropdown-item>Cart is empty</b-dropdown-item>
          </span>
        </b-nav-item-dropdown>

          <b-nav-item-dropdown right class="mx-2">
            <template #button-content>
              <span>{{ userName }}</span>
            </template>
            <b-dropdown-item @click="showProfile">Profile</b-dropdown-item>
            <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Topnav",
  data() {
    return {
      userName: "",
      query: "",
      products: [],
      searchResults: [],
      cartItems: [],
      allProducts: [],
    };
  },
  watch: {},
  methods: {
    showProfile() {
      this.$router.push("/profile");
    },
    signOut() {
      localStorage.removeItem("loggedInUser");
      this.$router.push("/");
    },
    searchProduct() {
      this.allProducts && this.query && this.query.length > 1
        ? (this.searchResults = this.allProducts.filter(
            (el) => el.productName.toLowerCase().indexOf(this.query) != -1
          ))
        : (this.searchResults = []);
    },
    showProduct(data) {
      this.query = data.productName;
      this.searchResults = [];
      this.$router.push(`/products/${data.id}`);
    },
    async productsData() {
      let [mobiles, laptops, appliances] = await Promise.all([
        axios.get("mobiles.json"),
        axios.get("laptops.json"),
        axios.get("electronics.json"),
      ]);
      this.allProducts = mobiles.data.concat(laptops.data, appliances.data);
    },
    navigateToBag() {
      this.$router.push("/bagpage");
    },
    getCartItems() {
      this.cartItems = JSON.parse(localStorage.getItem("cart"));
      console.log(this.cartItems);
    },
    showCartCount() {
      return this.$store.getters.cartCount;
    },
    removeItemFromCart(data) {
      this.cartItems = this.cartItems.filter((item) => item.id != data.id);
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
      localStorage.setItem("cartCount", this.cartItems.length.toString());
      this.$store.commit("cartCount", this.cartItems.length.toString());
    },
  },
  mounted() {
    let userName = localStorage.getItem("loggedInUser");
    userName = JSON.parse(userName);
    this.userName = userName.name;
    this.productsData();
    // eslint-disable-next-line no-unused-vars
    this.$root.$on("bv::dropdown::show", (bvEvent) => {
      this.getCartItems();
    });
  },
};
</script>

<style scoped>
.navbar.navbar-dark.bg-dark {
  background-color: #8a8a83 !important;
  padding: 1% 1%;
}
.autocomplete {
  position: relative;
  width: 130px;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>

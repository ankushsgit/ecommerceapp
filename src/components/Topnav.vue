<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="primary">
      <b-button v-b-toggle.sidebar-no-header>
        <b-icon icon="list" variant="primary"></b-icon>
      </b-button>
      <b-navbar-brand class="ml-3" @click="redirectToHome()">Amazon.in</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
          <div id="app1">
            <div class="form-group has-feedback"> 
            <input class="input-search form-control" type="text" v-model="query" placeholder="Search" @keyup="searchProduct"/>
            <ul id="list" v-show="searchResults.length > 0">
              <li v-for="(item, index) in searchResults" :key="index" @click="showProduct(item)"> <span>{{ item.productName }} in {{item.productCategory}} </span> </li> 
            </ul>
            </div>
          </div>
          </b-nav-form>

          <b-avatar :badge="showCartCount()" variant="" badge-variant="warning" src="https://cdn4.iconfinder.com/data/icons/shopping-35/24/Cart-1-512.png"> </b-avatar>

          <b-nav-item-dropdown class="mx-2" right>
          <div v-if="cartItems.length > 0">
          <b-dropdown-item v-for="item in cartItems" :key="item.id">
            <span @click="showProduct(item)">
            {{item.productName}}
            </span>
            <span @click="removeItemFromCart(item)">
              <b-icon icon="trash"></b-icon>
            </span>
            <b-dropdown-divider></b-dropdown-divider>
          </b-dropdown-item>
         
          </div>
          <div v-else>
            <b-dropdown-item>Cart is empty</b-dropdown-item>
          </div>
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
      query: this.$store.state.query.data,
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
      ( this.allProducts && this.query && this.query.length > 2 )
        ? (this.searchResults = this.allProducts.filter(
            (el) => el.productName.toLowerCase().indexOf(this.query) != -1
          ))
        : (this.searchResults = []);
    },
    showProduct(data) {
      console.log('hkskhskhskh')
      this.query = data.productName;
      this.$store.commit('query', this.query);
      this.searchResults = [];
      this.$router.push(`/products/${data.id}`);
    },
    async productsData() {
      let [mobiles, laptops, appliances] = await Promise.all([
        axios.get("http://localhost:3000/mobiles"),
        axios.get("http://localhost:3000/laptops"),
        axios.get("http://localhost:3000/electronics")
      ]);
      this.allProducts = mobiles.data.concat(laptops.data, appliances.data);
    },
    navigateToBag() {
      this.$router.push("/bagpage");
    },
    getCartItems() {
      this.cartItems = JSON.parse(localStorage.getItem("cart"));
    },
    showCartCount() {
      return this.$store.getters.cartCount;
    },
    removeItemFromCart(data) {
      this.cartItems = this.cartItems.filter((item) => item.id != data.id);
      localStorage.setItem("cart", JSON.stringify(this.cartItems));
      localStorage.setItem("cartCount", this.cartItems.length.toString());
      this.$store.commit("cartCount", this.cartItems.length.toString());
      this.$store.commit("itemRemoved", data);
    },
    redirectToHome () {
      if (this.$router.currentRoute.path == '/home') return
      this.$store.state.query.data = null;
      this.$router.push('/home')
    }
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

#app1 {
  width: 400px;
}

#list {
  font-size: 12px;
  list-style: none;
  margin: 0;
  padding: 5px 0;
  background-color: white;
  border-radius: 0 0 5px 5px;
  border: 1px #ccc solid;
  
}

#list li {
  display: block;
  padding: 5px 15px;
}

#list li:hover {
  background-color: #ccc;
/*   color: white; */
}

#list li span {
  font-weight: 550;
}

#list li p {
  margin: 5px 0 0;
}
</style>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-button v-b-toggle.sidebar-no-header
        ><b-icon icon="bar-chart-fill" flip-h rotate="90"></b-icon
      ></b-button>
      <b-navbar-brand to="/home">Amazon </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
         <div class="auto-complete">
        <b-input-group size="md" class="mb-2 col-md-7">
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
         
          <b-form-input
            type="text"
            placeholder="Search"
            v-model="query"
            @keyup="searchProduct"
          ></b-form-input>
          <span>
            <li class="autocomplete-result" v-for="product in searchResults" :key="product._id">{{product.productName}}</li>
          </span>
         
        </b-input-group>
         </div>

        <b-navbar-nav>
          <b-nav-item-dropdown text="Section" right>
            <b-dropdown-item href="#">section 1</b-dropdown-item>
            <b-dropdown-item href="#">section 1</b-dropdown-item>
            <b-dropdown-item href="#">section 1</b-dropdown-item>
            <b-dropdown-item href="#">section 1</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
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
import mobiles from '../../public/mobiles';

export default {
  name: "Topnav",
  data() {
    return {
      userName: "",
      query: "",
      products: [],
      searchResults: [],
    };
  },
  methods: {
    showProfile() {
      this.$router.push("/profile");
    },
    signOut() {
      localStorage.removeItem("loggedInUser");
      this.$router.push("/");
    },
    searchProduct() {
      let data = mobiles.data;
      console.log(data , 'exported data');
      ( data && this.query && this.query.length > 0 ) ? this.searchResults = data.filter(el => el.productName.toLowerCase().indexOf(this.query) != -1) : this.searchResults = [];
    },
  },
  mounted() {
    let userName = localStorage.getItem("loggedInUser");
    userName = JSON.parse(userName);
    this.userName = userName.name;
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
    background-color: #4AAE9B;
    color: white;
  }
</style>

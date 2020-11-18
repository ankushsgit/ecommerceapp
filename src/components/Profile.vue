<template>
  <div>
    <Topnav />
    <Sidenav />
    <div class="container justify-content-center mt-5">
      <b-card header="Profile" class="text-center">
        <b-card-text>
          <p>Name : {{ userDetails.name }}</p>
          <p>Email : {{ userDetails.email }}</p>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import Topnav from "./Topnav";
import Sidenav from "./Sidenav";

export default {
  name: "Profile",
  components: {
    Topnav,
    Sidenav,
  },
  data() {
    return {
      userDetails: {},
    };
  },
  methods: {},
  mounted() {
    this.userDetails = localStorage.getItem("loggedInUser");
    this.userDetails = JSON.parse(this.userDetails);
  },
};
</script>

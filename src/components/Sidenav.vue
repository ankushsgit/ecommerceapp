<template>
  <div>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template>
        <div class="p-3 color">
          <nav class="my-3">
            <b-nav vertical>
              <a class="ml-auto" href="javascript:void(0)" @click="closeNav()">x</a>
              <router-link @click="changeView('laptops')" to="/laptops">Laptops</router-link>
              <router-link @click="changeView('mobiles')" to="/mobiles">Mobiles</router-link>
              <router-link @click="changeView('electronicAppliances')" to="/electronicAppliances">Electronic Appliances</router-link>
              <router-link @click="changeView('addProducts')" to="/addProducts" >Add Products</router-link>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: "Sidenav",
  methods: {
    changeView(viewPage) {
      localStorage.setItem("viewPage", JSON.stringify(viewPage));
    },
    closeNav() {
      let sideNav = document.getElementById("sidebar-no-header");
      sideNav.style.width = "0";
    },
  },
};
</script>
<style scoped>
.b-nav-item {
  background-color: #8a8a83 !important;
}
</style>

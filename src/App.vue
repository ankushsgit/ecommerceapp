<template>
  <div id="app">
    <router-view></router-view>
    <Entry />
      <TheFirstNavBar/>
      <TheSecondnavBar/>
      <TheSideBar/>
    <Products/>
  </div>
</template>

<script>
import Entry from './components/Entry.vue';
import Products from'./components/Products.vue';
import TheFirstNavBar from "./components/UI/TheFirstNavBar";
import TheSecondnavBar from "./components/UI/TheSecondNavBar.vue";
import TheSideBar from "./components/UI/TheSideBar.vue";


export default {
  name: 'app',
  components: {
    Entry,
    Products,
    TheFirstNavBar,
    TheSecondnavBar,
    TheSideBar

  }
}
</script>
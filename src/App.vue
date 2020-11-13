<template>
  <div id="app">
    <router-view></router-view>
     <!-- <keep-alive>
      <component :is="currenctPage"></component>
    </keep-alive> -->
  </div>
</template>

<script>
//import SideBar from "./components/Sidenav.vue";
export default {
  name: 'app',
//changeView,
  data(){
    return{
      currenctPage:''
    }
  },
  
  watch:{
    currenctPage(){
      if(localStorage.getItem(''));
    }
  }
}
</script>
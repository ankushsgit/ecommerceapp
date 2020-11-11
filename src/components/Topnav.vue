<template>
   <div>
     <router-view></router-view>
  <b-navbar toggleable="lg" type="dark" variant="dark">

     <b-button v-b-toggle.sidebar-no-header><b-icon icon="bar-chart-fill" flip-h rotate="90"></b-icon></b-button>
    <router-link to='/home'><b-navbar-brand>Amazon </b-navbar-brand></router-link>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse"  is-nav > 
      
        <b-input-group size="md" class="mb-2 col-md-7" >
            <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="search" placeholder="Search terms"></b-form-input>
        </b-input-group>
    
     <b-navbar-nav>
        <b-nav-item-dropdown text="Section" right>
          <b-dropdown-item href="#">section 1</b-dropdown-item>
          <b-dropdown-item href="#">section 1</b-dropdown-item>
          <b-dropdown-item href="#">section 1</b-dropdown-item>
          <b-dropdown-item href="#">section 1</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item  href="#link-1" @click="hide">link 2</b-nav-item>
        <b-nav-item href="#link-2" @click="hide">Link 3</b-nav-item>
     </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Topnav'
}
</script>

<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #8a8a83!important;
    padding: 1% 1%;
 }
</style>
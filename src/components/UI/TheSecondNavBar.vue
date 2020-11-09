<template>
   <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">

   

    <b-collapse id="nav-collapse"  is-nav > 
      
    
     <b-navbar-nav>
           <b-nav-item  href="#link-1" @click="hide">link 0</b-nav-item>
        <b-nav-item href="#link-2" @click="hide">Link 1</b-nav-item>
        <b-nav-item  href="#link-1" @click="hide">link 2</b-nav-item>
        <b-nav-item href="#link-2" @click="hide">Link 3</b-nav-item>
          <b-nav-item  href="#link-1" @click="hide">link 4</b-nav-item>
        <b-nav-item href="#link-2" @click="hide">Link 5</b-nav-item>
          <b-nav-item  href="#link-1" @click="hide">link 6</b-nav-item>
        <b-nav-item href="#link-2" @click="hide">Link 7</b-nav-item>
          <b-nav-item  href="#link-1" @click="hide">link 8</b-nav-item>
        <b-nav-item href="#link-2" @click="hide">Link 9</b-nav-item>
        
     </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #acaca4!important;
    
 }
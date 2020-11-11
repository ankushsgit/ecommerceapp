<template>
    <div>
        <slot></slot>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template>
        <div class="p-3 color">
          <nav class="mb-3">
            <b-nav vertical>
              <router-link to='/laptops'>Laptops</router-link>
              <router-link to='/mobiles'>Mobiles</router-link>
              <router-link to='/electronicAppliances'>Electronic Appliances</router-link>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
<script>
export default {
  name: 'Sidenav'
}
</script>
<style scoped>
.b-nav-item{
    background-color: #8A8A83!important;
}
</style>
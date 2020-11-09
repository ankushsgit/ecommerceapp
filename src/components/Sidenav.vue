<template>
    <div>
        <slot></slot>
    <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3 color">
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">link 1</b-nav-item>
              <b-nav-item  href="#link-1" @click="hide">link 2</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Link 3</b-nav-item>
            </b-nav>
          </nav>
          <!-- <b-button  variant="primary" block @click="hide">Close Sidebar</b-button> -->
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
    background-color: #8a8a83!important;
}
</style>

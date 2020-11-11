<template>
    <div>
        <Topnav />
        <Sidenav />
    </div>
</template>

<script>
import Topnav from './Topnav.vue';
import Sidenav from './Sidenav.vue';


export default {
  name: 'Navbar',
  components: {
      Topnav,
      Sidenav,
  }
}
</script>
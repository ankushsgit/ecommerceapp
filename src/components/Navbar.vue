<template>
    <div>
        <Topnav />
        <!-- <Secondnav /> -->
        <Sidenav />
    </div>
</template>

<script>
import Topnav from './Topnav.vue';
// import Secondnav from './Secondnav.vue';
import Sidenav from './Sidenav.vue';

export default {
  name: 'Navbar',
  components: {
      Topnav,
    //   Secondnav,
      Sidenav
  }
}
</script>
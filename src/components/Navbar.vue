<template>
    <div>
        <Topnav />
        <Secondnav />
        <Sidenav />
        <Cardview />
    </div>
</template>

<script>
import Topnav from './Topnav.vue';
import Secondnav from './Secondnav.vue';
import Sidenav from './Sidenav.vue';
import Cardview from './Cardview';


export default {
  name: 'Navbar',
  components: {
      Topnav,
      Secondnav,
      Sidenav,
      Cardview
  }
}
</script>
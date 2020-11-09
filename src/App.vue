<template>
  <div id="app">
    <Entry />
    <Products/>
  </div>
</template>

<script>
import Entry from './components/Entry.vue';
import Products from'./components/Products.vue';


export default {
  name: 'app',
  components: {
    Entry,
    Products
  }
}
</script>
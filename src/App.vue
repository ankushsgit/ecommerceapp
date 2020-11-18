<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.outerview {
  width: auto;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
}

.outer1 {
  flex: 0 0 100%;
  display: flex;
  padding: 10px;
}

.outer2 {
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  flex: 0 0 100%;
}
</style>


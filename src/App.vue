<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
    </nav>

    <!-- Page will be rendered inside router-view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav a {
  margin-right: 12px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

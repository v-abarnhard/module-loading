<template>
  <div id="app">
  <h1>Hello App!</h1>
    <p>
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/page-one">Page One</router-link>
      <router-link class="link" to="/page-two">Page Two</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  padding: 0 10px;
}
</style>

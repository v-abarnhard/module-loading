<template>
  <div class="hello">
    <h1>Home Page</h1>
    <table>
      <tbody>
        <tr><td>Component Version</td><td>{{internalVersion}}</td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      internalVersion: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  table {
    margin: auto;
    font-size: 40px;
  }
</style>

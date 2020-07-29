<template>
  <div id="app">
    <h1 id="header">Todo List</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  // created() {
  //   const json = fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
  //       .then(response => response.json())
  //       .then(json => this.$store.commit('setTodos', json))
  // },
  async created() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
    const json = await response.json()
    this.$store.commit('setTodos', json)
    console.log(json)
  },
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
  width: 100%;
  display: block;
}

#header {
  alignment: center;
  display: block;
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.20);
  margin-top: -50px;
  margin-bottom: 30px;
}

</style>

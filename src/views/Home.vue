<template>
  <div>
    <h1>Home page</h1>
    <h3>Welcome to new TodoList application!</h3>
    <p>You have <strong>{{this.todos.length}} tasks</strong> among which <strong>{{this.todos.filter(t => !t.completed).length}} active</strong> and <strong>{{this.todos.filter(t => t.completed).length}} completed</strong></p>
    <router-link to="/todos">Todo List</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>
h3 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: rgba(175, 47, 47, 0.70);
}
</style>


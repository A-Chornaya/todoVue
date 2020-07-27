<template>
  <div id="app">
    <h1>Todo List</h1>
    <AddTodo
      @addTodo="addNewTodo"
    />
    <hr>
    <TodoList
      v-bind:todoList="todos"
      @remove-todo="removeTodo"
    />
  </div>
</template>

<script>

import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name: 'App',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
        .then(response => response.json())
        .then(json => this.todos = json)
  },
  components: {
    TodoList, AddTodo
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addNewTodo(item) {
      this.todos.push(item)
    }
  }
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
</style>

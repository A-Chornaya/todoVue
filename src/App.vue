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
      todos: [
        { id: 1, title: 'Купить хлеб', completed: false },
        { id: 2, title: 'Погулять с собакой', completed: false },
        { id: 3, title: 'Забрать сумку с ремонта', completed: false }
      ]
    }
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

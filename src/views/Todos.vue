<template>
  <div>
    <h2>List for your daily plans</h2>
    <router-link to="/">Home</router-link>
    <AddTodo
        @addTodo="addNewTodo"
    />
    <hr>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="todos.length"
        v-bind:todoList="todos"
        @remove-todo="removeTodo"
    />
    <p v-else>- No todos -</p>
  </div>
</template>

<script>

import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.todos = json
            this.loading = false
          }, 1000)
        })
  },
  components: {
    TodoList, AddTodo, Loader
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

<template>
  <div>
    <h2>List for your daily plans</h2>
    <router-link to="/">Home</router-link>
    <div id="post-header">
      <AddTodo
          @addTodo="addNewTodo"
      />
      <select v-model="filter">
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todoList="filteredTodos"
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
      filter: 'all',
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
  computed: {
    filteredTodos() {
      if(this.filter === 'active') {
        return  this.todos.filter(t => !t.completed)
      }
      else if(this.filter === 'completed') {
        return  this.todos.filter(t => t.completed)
      }
      return this.todos
    }
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
 #post-header {
   display: flex;
   flex-direction: row;
   justify-content: center;
   margin-top: 2rem;
 }
</style>
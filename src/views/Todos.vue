<template>
  <div>
    <h2>List for your daily plans</h2>
    <router-link to="/">Home</router-link>
    <div id="post-header">
      <AddTodo
          @addTodo="addNewTodo"
      />
      <select v-model="filter">
        <option value="all" selected>All</option>
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
import { mapMutations } from 'vuex';

export default {
  name: 'Todos',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
    //     .then(response => response.json())
    //     .then(json => {
    //       // setTimeout(() => {
    //       //   this.$store.state.todos = json
    //       //   this.loading = false
    //       // }, 1000)
    //     })

          setTimeout(() => {
            this.loading = false
          }, 1000)
  },
  components: {
    TodoList, AddTodo, Loader
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
    filter: {
      get () {
        return this.$store.state.filter
      },
      set (value) {
        this.$store.commit('changeFilter', value)
      }
    },
    filteredTodos() {
      return this.$store.getters.filteredTodos
    }
  },
  methods: {
    ...mapMutations([
        'addNewTodo',
        'removeTodo',
        'changeFilter'
    ])
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
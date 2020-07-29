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
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'Todos',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  components: {
    TodoList, AddTodo, Loader
  },
  computed: {
    filter: {
      get() {
        return this.$store.state.filter
      },
      set(value) {
        this.$store.commit('changeFilter', value)
      }
    },
    ...mapGetters([
      'filteredTodos',
    ]),
  },
  methods: {
    ...mapMutations([
      'addNewTodo',
      'removeTodo',
      'changeFilter',
      'setTodos'
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
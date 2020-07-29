import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      todos:  [],
      filter: 'all',
    },
    getters:{ //similar to computed but this will cache for reuse
        filteredTodos(state) {
            if(state.filter === 'active') {
                return  state.todos.filter(t => !t.completed)
            }
            else if(state.filter === 'completed') {
                return  state.todos.filter(t => t.completed)
            }
            return state.todos
        }
    },
    mutations: {
        addNewTodo(state, item) {
            state.todos.push(item)
        },
        removeTodo(state, id) {
            state.todos = state.todos.filter(t => t.id !== id)
        },
        changeFilter(state, newFilter) {
            state.filter = newFilter
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    this.$store.todos = json
                    // this.todos = json
                    this.loading = false
                }, 1000)
            })
    },
})
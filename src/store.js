import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: [],
        filter: 'all',
    },
    getters: { //similar to computed but this will cache for reuse
        filteredTodos(state) {
            if (state.filter === 'active') {
                return state.todos.filter(t => !t.completed)
            } else if (state.filter === 'completed') {
                return state.todos.filter(t => t.completed)
            }
            return state.todos
        }
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos
        },
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
})
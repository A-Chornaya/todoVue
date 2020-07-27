<template>
    <div>
        <ul>
            <TodoItem
              v-for="(t, i) in todoList"
              :key="t.id"
              v-bind:todo="t"
              v-bind:index="i"
              v-on:remove-item="removeElement"
            />
        </ul>
    </div>
</template>

<script>
  import TodoItem from '@/components/TodoItem'
  export default {
    props: ['todoList'],
    components: {
      TodoItem
    },
    methods: {
      removeElement(id) {
        this.$emit('remove-todo', id)
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
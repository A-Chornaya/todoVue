<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox"
              v-bind:checked="todo.completed"
              v-on:change="todo.completed = !todo.completed">
            <strong>{{ index + 1 }}</strong>
            {{ todo.title | upperCase}}
        </span>
        <button class="rm"
          v-on:click="$emit('remove-item', todo.id)"
        >&times;</button>
    </li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      },
      index: Number
    },
    filters: {
      upperCase(value) {
        return value.toUpperCase()
      }
    }
  }
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin: 1rem;
    }

    .rm {
        background: rgba(175, 47, 47, 0.65);
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
    }

    .done {
        text-decoration: line-through;
    }

    input {
        margin-right: 1rem;
    }
</style>

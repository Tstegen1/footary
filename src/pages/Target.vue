<template>
  <v-container id="target">
    <v-list>
      <v-list-item v-for="todo in todos" :key="todo.id">{{ todo.name }}</v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {name: 'task1', id: 1},
        {name: 'task2', id: 2},
        {name: 'task3', id: 3},
      ]
    }
  }
}
</script>
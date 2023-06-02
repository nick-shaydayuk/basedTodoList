<script setup lang="ts">
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'
import { useStore } from 'vuex'

const store = useStore()
const newTodo = ref()

const handleInputChange = (e: Event) => {
  const el = e.target as HTMLInputElement
  newTodo.value = el.value
}

function addTodo() {
  if (!newTodo.value) return
  store.dispatch('addTodo', newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <main>
    <h1 class="heading">Based TodoList</h1>
    <div class="add-todo__container">
      <input class="add-todo__input" @input="(e) => handleInputChange(e)" :value="newTodo" />
      <button @click="addTodo()">Add Todo</button>
    </div>

    <TodoList />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.heading {
  font-weight: 600;
  margin: 0 auto;
  display: block;
  max-width: max-content;
}

.add-todo__container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.add-todo__input {
  background: #f3f3f3;
  min-width: 200px;
  border: 1px solid black;
  border-radius: 8px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

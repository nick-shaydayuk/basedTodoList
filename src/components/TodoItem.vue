<script setup lang="ts">
import type { Todo } from '@/store';
import { useStore } from 'vuex'

defineProps<{
  todo: Todo
}>()

const store = useStore()

const removeTodo = (todo: Todo) => store.dispatch('removeTodo', todo)
</script>
<template>
  <div class="item">
    <h3>{{ todo.text }}</h3>
    <button class="destroy" @click="removeTodo(todo)">remove todo</button>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  min-height: 30px;
  border-radius: 8px;
  border: 3px dashed red;
  padding: 10px 5px;
}

.destroy {
  height: 1.2rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
}
</style>

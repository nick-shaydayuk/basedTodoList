<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { useStore } from 'vuex'

const store = useStore()
</script>

<template>
  <div v-for="item in store.state.todos" :key="item.id">
    <TodoItem :todo="item" />
  </div>
</template>

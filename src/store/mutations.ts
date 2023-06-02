import type { State, Todo } from "."

export const STORAGE_KEY = 'todos-vuejs'

export const mutations = {
  addTodo (state: State, todo: Todo) {
    state.todos.push(todo)
  },

  removeTodo (state: State, todo: Todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
}
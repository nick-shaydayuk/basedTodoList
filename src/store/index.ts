import { createStore } from 'vuex'
import { mutations } from './mutations'
import actions from './actions'

export type Todo = {
  id: number,
  text: string
}

export type State = {
  todos: Todo[]
}

export default createStore<State>({
  state: {
    todos: [
      {
        text: 'lorem',
        id: 1
      },
      {
        text: 'ipsum',
        id: 2
      }
    ]
  } as State,
  actions,
  mutations
})

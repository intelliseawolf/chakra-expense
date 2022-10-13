export const state = () => ({
  list: [],
})

export const getters = {
  list: (state) => state.list,
}

export const mutations = {
  addTodo(state, todo) {
    state.list.push({
      ...todo,
      completed: false,
    })
  },
  completeTodo(state, todo) {
    const index = state.list.findIndex((i) => i.id === todo.id)
    state.list.splice(index, 1, {
      ...state.list[index],
      completed: !state.list[index].completed,
    })
  },
  deleteTodo(state, todo) {
    const index = state.list.findIndex((i) => i.id === todo.id)
    state.list.splice(index, 1)
  },
}

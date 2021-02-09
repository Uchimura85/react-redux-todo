let nextTodoId = 100
export const addTodo = object => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  ...object
})
export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id: id,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

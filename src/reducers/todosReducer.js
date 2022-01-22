import {createSlice} from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    removeTodo: (state, action) => {
      // find todo by id
      const todo = state.find(todo => todo.id === action.payload)
      // remove todo
      state.splice(state.indexOf(todo), 1)
    },
  }
})

export const { addTodo, removeTodo } = todosSlice.actions

export default todosSlice.reducer

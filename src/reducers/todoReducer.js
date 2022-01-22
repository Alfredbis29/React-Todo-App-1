import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    id: '',
    title: '',
    description: '',
    date: '',
    completed: false,
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload
    },
    updateDescription: (state, action) => {
      state.description = action.payload
    },
    updateDate: (state, action) => {
      state.date = action.payload
    },
    completeTodo: (state, action) => {
      state.completed = true
    }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { updateTitle, updateDescription, updateDate, completeTodo } = todoSlice.actions

export default todoSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoReducer'
import todosReducer from './reducers/todosReducer'

export default configureStore({
  reducer: {
    todos: todosReducer,
    todo: todoReducer
  },
})
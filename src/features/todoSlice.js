import { createSlice } from '@reduxjs/toolkit';
import {v1 as uuid} from 'uuid'

const initialState = {
  todoList: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // action to push the payload(new todo) into the todoList state
    saveTodo: (state, action) => {
      let todo = Object.assign({}, {...action.payload,  uniqueId: uuid()})
      state.todoList.push(todo)
    },

    deleteTodo: (state, action) => {
      let pos = state.todoList.filter((item) => item.uniqueId !== action.payload.uniqueId)
      
      state.todoList = pos
    },
    // action to set todo as done or undone
    setCheck: (state, action) => {
      state.todoList.map(item => {
        // equating action.payload to unique identifier item.id
        if(action.payload === item.id) {
          // condition to set done to undone or vice versa
          if(item.done === true) {
            item.done = false
          }
          else {
            item.done = true
          }
        }
        return state.todoList
      })
    }
  }
});

export const {
  saveTodo,
  setCheck,
  deleteTodo
} = todoSlice.actions

// returning todoList from todos
export const selectTodoList = state =>state.todos.todoList

export default todoSlice.reducer
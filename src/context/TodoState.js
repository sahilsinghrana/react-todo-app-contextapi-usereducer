import React, {useReducer} from 'react';
import TodoContext from './todo-context';
import todoReducer from './todoReducer'
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './todo-actions'

function TodoState(props) {
  const initialState = {
    todos: []
  }
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {

    dispatch({type: ADD_TODO, payload:todo})
  }

  const toggleTodo = (todoId) => {
    dispatch({type:TOGGLE_TODO, payload:todoId})
  }

  const deleteTodo = (todoId) => {
    dispatch({type:DELETE_TODO, payload:todoId})
  }

return (
    <TodoContext.Provider value={{
      message: "Hello from context",
      todos: state.todos,
      addTodo,
      deleteTodo,
      toggleTodo
    }}>
    {props.children}

    </TodoContext.Provider>
  )
}

export default TodoState;

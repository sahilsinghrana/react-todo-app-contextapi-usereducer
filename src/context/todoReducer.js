
import {ADD_TODO, TOGGLE_TODO, DELETE_TODO} from './todo-actions.js'

const todoReducer = (state, action ) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      }
    case TOGGLE_TODO:
      return{
        ...state,
        todos: state.todos.map(todo => todo._id === action.payload ? {...todo, completed: !todo.completed} : todo)
      }
    default:
      return state
  }
}

export default todoReducer;

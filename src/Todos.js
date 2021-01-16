import React, {useContext} from 'react';
import TodoContext from './context/todo-context'
import TodoItem from './TodoItem'
export default function Todo () {
  const { todos, addTodo,toggleTodo,deleteTodo} = useContext(TodoContext)

  return (
    <ul style={{textAlign:'center', background: "#00BFFF", padding:"10px 2px", boxShadow:"3px 8px 20px #222233" }}>

      {todos.map(todo => {
        return(
          <TodoItem key={todo._id} todo={todo} addTodo={addTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )
      })}

    </ul>
  );
}

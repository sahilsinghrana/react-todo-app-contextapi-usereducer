import React from 'react';
import {Button} from 'react-bootstrap';

export default function TodoItem ({todo, deleteTodo, toggleTodo}) {
  return (
    <li style={{padding:'5px 6px',display:"flex", justifyContent:"space-between", borderBottom: "1.5px solid #395be0"}}>
      <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.name}</span>
      <div>
      <Button variant="success"  size="sm" style={{marginRight: '1rem'}}
        onClick={(() => toggleTodo(todo._id))}
      >Toggle</Button>
      <Button variant="danger" size="sm"
        onClick={() => deleteTodo(todo._id)}
      >Delete</Button>
      </div>
    </li>
  );
}

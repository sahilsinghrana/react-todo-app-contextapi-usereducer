import React, { useState, useContext } from 'react';
import TodoContext from './context/todo-context';
import {Button} from 'react-bootstrap';

const TodoInput = () => {
  const {addTodo} = useContext(TodoContext);
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    let newTodo={
      _id:Math.random(),
      name: input,
      completed: false
    }
    if(input.length > 0 ){
      // console.log(newTodo);
      addTodo(newTodo);

      setInput('');

    }
  }
  return(
    <>
    <input
      type="text"
      placeholder="Enter Something"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      style={{width:"100%"}}
      />
    <Button variant="secondary" onClick={handleClick}>Make Todo</Button>
    </>
  );
}


export default TodoInput;

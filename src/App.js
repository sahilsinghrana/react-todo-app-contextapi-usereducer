import React from 'react';
import { Card,CardGroup,Alert} from 'react-bootstrap';
import Todos from './Todos';
import TodoInput from './TodoInput';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import TodoState from './context/TodoState'

function App() {

  return (
    <div className="App">
      <TodoState>
      <CardGroup style={{display: "flex", flexDirection: 'column', margin:0}}>
      <Card className="mb-2" bg="info" text='white' style={{maxHeight: "12rem",marginBottom:0, justifyContent: "center",width: "50rem"}}>
        <Card.Body>
              <Card.Title>Todo App</Card.Title>
                <Card.Header>Todo Input</Card.Header>
                <TodoInput />
        </Card.Body>
      </Card>
      <Card className="mb-2" bg="info" text='white' style={{justifyContent: "center",width: "50rem"}}>
        <Card.Body>
                <Card.Header>Todos</Card.Header>
                <Todos />

        </Card.Body>
      </Card>
      <Alert  variant='warning'>This is a non-responsive project just to learn Context API and useReducer Hook together 😊</Alert>
      </CardGroup>
      </TodoState>
    </div>
  );
}

export default App;

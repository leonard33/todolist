/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Todolist from "./Components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <div className="main-container">
        <header className="App-header">
          <h1>My todo list</h1>
        </header>
        {/* pass set input as prop */}
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todo={todo}
          setTodo={setTodo}
        />
        <Todolist todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;

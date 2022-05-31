/* eslint-disable react/prop-types */
import React from "react";
import Itemtodo from "./Itemtodo";

const Todolist = ({ todo, setTodo }) => {
  // console.log(todo);
  return (
    <div className="output-container">
      <ul className="todo-list">
        <li>
          {todo.map((todos) => (
            <Itemtodo
              key={todos.id}
              text={todos.text}
              todo={todo}
              todos={todos}
              setTodo={setTodo}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Todolist;

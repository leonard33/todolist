/* eslint-disable react/prop-types */
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Itemtodo = ({ text, setTodo, todos, todo }) => {
  const checkboxhandler = () => {
    setTodo(
      todo.map((item) => {
        if (item.id === todos.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deletehandler = () => {
    setTodo(todo.filter((el) => el.id !== todos.id));
  };

  return (
    <div className="todo-item">
      <div className="complete">
        <input onChange={checkboxhandler} type="checkbox"></input>
      </div>

      {/* if completed add CSS class line*/}
      <div className={`mytodo ${todos.completed ? "line" : ""}`}>{text}</div>
      <div onClick={deletehandler} className="delete">
        <AiFillDelete />
      </div>
    </div>
  );
};

export default Itemtodo;

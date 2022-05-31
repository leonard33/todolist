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
    setTodo(
      todo.filter((el) => el.id !== todos.id)
      /*todo.forEach((...todos) => {
        todos.id = todos.length - 1;
      })*/
    );
  };

  return (
    <div className="todo-item">
      <div className="complete">
        <input onChange={checkboxhandler} type="checkbox"></input>
      </div>
      <div className="mytodo">{text}</div>
      <div onClick={deletehandler} className="delete">
        <AiFillDelete />
      </div>
    </div>
  );
};

export default Itemtodo;

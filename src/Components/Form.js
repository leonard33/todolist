/* eslint-disable react/prop-types */
import React from "react";
import { BiSubdirectoryLeft } from "react-icons/bi";

const Form = ({ setInputText, inputText, setTodo, todo }) => {
  const handletext = (e) => {
    setInputText(e.target.value);
  };
  const todohandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: inputText, completed: false, id: todo.length + 1 },
    ]);
    setInputText("");
  };
  return (
    <form-container>
      <form id="form-1">
        <input
          value={inputText}
          onChange={handletext}
          type="text"
          id="todo-input"
          placeholder="Add to your list..."
        />
        <div className="return">
          <button
            onClick={todohandler}
            variant="outlined"
            type="submit"
            id="add-todo"
          >
            <BiSubdirectoryLeft />
          </button>
        </div>
      </form>
    </form-container>
  );
};

export default Form;

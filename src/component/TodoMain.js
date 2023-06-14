import React from "react";
import Todoitem from "./Todoitem";
import "./scss/TodoMain.scss";
const TodoMain = () => {
  return (
    <ul className="todo-list">
      <Todoitem />
      <Todoitem />
      <Todoitem />
    </ul>
  );
};

export default TodoMain;

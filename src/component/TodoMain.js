import React from "react";
import Todoitem from "./Todoitem";
import "./scss/TodoMain.scss";
const TodoMain = ({ todoList, remove }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <Todoitem key={todo.id} item={todo} remove={remove} />
      ))}
    </ul>
  );
};

export default TodoMain;

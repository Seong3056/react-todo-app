import React from "react";
import Todoitem from "./Todoitem";
import "./scss/TodoMain.scss";
const TodoMain = ({ todoList, remove, check }) => {
  return (
    <ul className="todo-list">
      {todoList.map((todo) => (
        <Todoitem key={todo.id} item={todo} remove={remove} check={check} />
      ))}
    </ul>
  );
};

export default TodoMain;

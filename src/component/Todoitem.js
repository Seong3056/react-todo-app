import React from "react";
import "./scss/TodoItem.scss";
import { MdDone, MdDelete } from "react-icons/md";

const Todoitem = () => {
  return (
    <li className="todo-list-item">
      <div className="check-circle active">
        <MdDone />
      </div>
      <span className="text finish">할일~~</span>
      <div className="remove">
        <MdDelete />
      </div>
    </li>
  );
};

export default Todoitem;

import React, { useState } from "react";
import "./scss/TodoItem.scss";
import { MdDone, MdDelete } from "react-icons/md";
import cn from "classnames";

const Todoitem = ({ item, remove, check }) => {
  const { id, title, done } = item;

  return (
    <li className="todo-list-item">
      <div
        className={cn("check-circle", { active: done })}
        onClick={() => check(id)}
      >
        {done && <MdDone />}
      </div>
      <span className={cn("text", { finish: done })}>{title}</span>
      <div className="remove" onClick={() => remove(id)}>
        <MdDelete />
      </div>
    </li>
  );
};

export default Todoitem;

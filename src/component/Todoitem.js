import React, { useState } from "react";
import "./scss/TodoItem.scss";
import { MdDone, MdDelete } from "react-icons/md";
import cn from "classnames";

const Todoitem = ({ item, remove }) => {
  const { id, title, done } = item;

  const [state, setState] = useState(done);
  const onToggle = () => {
    setState(!state);
  };
  return (
    <li className="todo-list-item">
      <div className={cn("check-circle", { active: state })} onClick={onToggle}>
        {state && <MdDone />}
      </div>
      <span className={cn("text", { finish: state })}>{title}</span>
      <div className="remove" onClick={() => remove(id)}>
        <MdDelete />
      </div>
    </li>
  );
};

export default Todoitem;

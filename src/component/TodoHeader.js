import React from "react";
import "./scss/TodoHeader.scss";
const TodoHeader = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = date.getDay();

  return (
    <header>
      <h1>
        {year}년 {month}월 {day}일
      </h1>
      <div className="day">화요일</div>
      <div className="task-left">할 일 x개 남음</div>
    </header>
  );
};

export default TodoHeader;

import React, { useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoMain from "./TodoMain";
import TodoInput from "./TodoInput";

import "./scss/TodoTemplate.scss";
import { json } from "react-router-dom";

const TodoTemplate = () => {
  // 서버에 할일 목록(json)을 요청(fetch)해서 받아와야 함
  const API_BASE_URL = "http://localhost:8181/api/todos";

  //todos 배열을 상태관리
  const [todos, setTodos] = useState([]);

  // todoInput에게 todoText를 받아오는 함수
  // 자식 컴포넌트가 부모 컴포넌트에게 데이터를 전달할 때는
  // props 사용이 불가능
  // 부모 컴포넌트에서 함수를 선언 (매개변수 꼭 선언)-> props로 함수를 전달
  // 자식 컴포넌트에서 전달받은 함수를 호출하면서 매개값으로 데이터를 전달

  const addTodo = (todoText) => {
    console.log("할일 정보:", todoText);
    const newTodo = {
      title: todoText,
    };
    // todos.push(newTodo);

    //리액트의 상태변수는 무조건 setter를 통해서만
    //상태값을 변경해야 렌더링에 적용된다
    //다만, 상태변수가 불변성(immutable)을 가지기 때문에
    //기존 상태에서 변경은 불가능하고,
    //새로운 상태를 만들어서 변경해야 한다.
    // const copyTodos = todos.slice();
    // copyTodos.push(newTodo);
    fetch(API_BASE_URL, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((rs) => rs.json())
      .then((json) => {
        setTodos(json.todos);
      });
  };
  //할 일 삭제 처리 함수
  const removeTodo = (id) => {
    console.log("삭제대상:", id);

    //주어진 배열의 값들을 순회하여 조건에 맞는 요소들만 모아서
    //새로운 배열로 리턴해 주는 함수
    fetch(`${API_BASE_URL}/${id}`, {
      method: "delete",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((rs) => rs.json())
      .then((json) => {
        setTodos(json.todos);
      });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //할일 체크 처리함수
  const checkTodo = (id, status) => {
    console.log("check한 todo Id:", id, status);

    const check = {
      id: id,
      done: !status,
    };

    fetch(API_BASE_URL, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(check),
    })
      .then((rs) => rs.json())
      .then((json) => {
        console.log(json.todos);
        setTodos(json.todos);
      });
  };

  //할일 카운트 함수
  const todoCount = () => {
    return todos.filter((todo) => !todo.done).length;
  };

  let count = todoCount();
  useEffect(() => {
    //페이지가 렌더링 됨과 동시에 할 일 목록을 요청해서 뿌려준다.
    fetch(API_BASE_URL)
      .then((rs) => rs.json())
      .then((json) => {
        console.log(json.todos);
        setTodos(json.todos);
      });
  }, [count]);
  return (
    <div class="TodoTemplate">
      <TodoHeader count={count} />
      <TodoMain todoList={todos} remove={removeTodo} check={checkTodo} />
      <TodoInput addTodo={addTodo} />
    </div>
  );
};

export default TodoTemplate;

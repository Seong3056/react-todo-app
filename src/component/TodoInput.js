import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./scss/TodoInput.scss";
import cn from "classnames";
const TodoInput = () => {
  //입력창이 열리는 여부를 표현하는 상태값
  const [open, setOpen] = useState(false);
  // + 버튼 클릭 시 이벤트 처리
  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <div className="form-wrapper">
          <form className="insert-form">
            <input
              type="text"
              placeholder="할 일을 입력 후, 엔터를 누르세요."
              id=""
            />
          </form>
        </div>
      )}
      {/* cn() : 첫번째 파라미터는 항상 유지할 default 클래스
                 두번째 파라미터는 논리 상태값
                 => 논리 상태값이 ture일 경우 해당 클래스 추가
                    false일 경우 제거
                    {클래스이름: 논리값}, 클래스이름 지정안할시 변수명이 클래스이름으로 사용됨 */}
      <button className={cn("insert-btn", { open })} onClick={onToggle}>
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
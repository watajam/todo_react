import React, { memo, useCallback, useState } from "react";

export const EditTodos = memo((props) => {
  const [editTodo, setEditTodo] = useState("");
  const [boolean, setboolean] = useState(true);

  //入力フォーム
  const handleChenge = useCallback((e) => {
    setEditTodo(e.target.value.trim());
  }, []);

  const handleBooleanChenge = useCallback(() => {
    setboolean((prevBoolen) => {
      return !prevBoolen;
    });
  },[]);

  //編集機能
  const handleEditTodo = useCallback(() => {
    handleBooleanChenge();
    props.setTodo((prevEditTodos) => {
      const newTodos = [...prevEditTodos];
      newTodos[props.index] = editTodo;
      return newTodos;
    });
    setEditTodo(props.items);
  }, [editTodo, handleBooleanChenge, props]);

  return (
    <>
      {boolean ? (
        <li>{props.items}</li>
      ) : (
        <input type="text" value={editTodo} onChange={handleChenge} />
      )}
      <button onClick={handleEditTodo}>
        {boolean ? "編集する" : "編集完了"}
      </button>
    </>
  );
});

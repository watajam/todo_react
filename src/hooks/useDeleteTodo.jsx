import { useCallback } from "react";

export const useDeleteTodo = (setTodo) => {
  //Todo削除(未完了)
  const deleteTodo = useCallback(
    (index) => {
      setTodo((prevTodos) => {
        const newTodos = [...prevTodos];
        newTodos.splice(index, 1); //変化が開始する位置,削除する要素の数
        return newTodos;
      });
    },
    [setTodo]
  );

  return { deleteTodo };
};

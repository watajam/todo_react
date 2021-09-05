import { useCallback } from "react";

export const useDeleteAddTodo = (setTodo,addsetTodo,todo) => {
  //Todo削除 & 移動
  const handleAddTodo = useCallback(
    (index) => {
      setTodo((prevTodos) => {
        const newTodos = [...prevTodos];
        newTodos.splice(index, 1);
        return newTodos;
      });
      addsetTodo((prevTodos) => {
        return [...prevTodos, todo[index]];
      });
    },
    [setTodo, addsetTodo, todo]
  );
  return { handleAddTodo };
};

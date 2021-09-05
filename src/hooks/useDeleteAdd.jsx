export const useDeleteAdd = (setTodo,addsetTodo,todo) => {
  //Todo移動 (未完了→ 進行中)
  const handleAddTodo = (index) => {
    setTodo((prevTodos) => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
    addsetTodo((prevTodos) => {
      return [...prevTodos, todo[index]];
    });
  };
  return { handleAddTodo };
};

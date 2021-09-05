import { useCallback, useState } from "react";
import { useInputTodo } from "../../hooks/useInputTodo";
import { Form } from "../form/Index";
import { IncompleteTodos } from "./IncompleteTodos";
import { ProgressTodos } from "./ProgressTodos";
import { CompletionTodos } from "./CompletionTodos";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";
import { useDeleteAdd } from "../../hooks/useDeleteAdd";

export const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [progressTodo, setProgressTodo] = useState([]);
  const [completionTodo, setCompletionTodo] = useState([]);

  const { text, handleSubmit, handleChenge } = useInputTodo();

  const { deleteTodo: handleDelTodo } = useDeleteTodo(setTodo);
  const { deleteTodo: handleProgDeleteTodo } = useDeleteTodo(setProgressTodo);
  const { deleteTodo: handleCompDeleteTodo } = useDeleteTodo(setCompletionTodo);

  const { handleAddTodo: handleProgAddTodo } = useDeleteAdd(
    setTodo,
    setProgressTodo,
    todo
  );
  const { handleAddTodo: handleCompAddTodo } = useDeleteAdd(
    setProgressTodo,
    setCompletionTodo,
    progressTodo
  );

  //Todo追加
  const handleAddTodo = useCallback(() => {
    setTodo((prevTodo) => {
      if (!text) {
        return prevTodo;
      }
      return [...prevTodo, text];
    });
  }, [text]);

  return (
    <div>
      <h1>Todo List</h1>

      {/* //フォーム */}
      <Form
        handleSubmit={handleSubmit}
        text={text}
        handleChenge={handleChenge}
        handleAddTodo={handleAddTodo}
      />

      {/* 未完了Todo */}
      <IncompleteTodos
        todo={todo}
        handleAddTodo={handleProgAddTodo}
        handleDeleteTodo={handleDelTodo}
      />

      {/* 進行中 */}
      <ProgressTodos
        todo={progressTodo}
        handleAddTodo={handleCompAddTodo}
        handleDeleteTodo={handleProgDeleteTodo}
      />

      {/* 完了 */}
      <CompletionTodos
        todo={completionTodo}
        handleDeleteTodo={handleCompDeleteTodo}
      />
    </div>
  );
};

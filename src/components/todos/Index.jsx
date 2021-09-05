import { memo, useCallback, useState } from "react";

import { Form } from "../form/Index";
import { IncompleteTodos } from "./IncompleteTodos";
import { ProgressTodos } from "./ProgressTodos";
import { CompletionTodos } from "./CompletionTodos";
import { useInputTodo } from "../../hooks/useInputTodo";

export const Todos = memo(() => {
  const [todo, setTodo] = useState([]);
  const [progressTodo, setProgressTodo] = useState([]);
  const [completionTodo, setCompletionTodo] = useState([]);
  const { text, handleSubmit, handleChenge } = useInputTodo();

  // Todo追加
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
        text={text}
        handleSubmit={handleSubmit}
        handleChenge={handleChenge}
        handleAddTodo={handleAddTodo}
      />

      {/* 未完了Todo */}
      <IncompleteTodos
        todo={todo}
        setTodo={setTodo}
        setProgressTodo={setProgressTodo}
      />

      {/* 進行中 */}
      <ProgressTodos
        todo={progressTodo}
        progressTodo={progressTodo}
        setProgressTodo={setProgressTodo}
        setCompletionTodo={setCompletionTodo}
      />

      {/* 完了 */}
      <CompletionTodos
        todo={completionTodo}
        setCompletionTodo={setCompletionTodo}
      />
    </div>
  );
});

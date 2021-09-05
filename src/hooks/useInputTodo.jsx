import { useCallback, useState } from "react";

export const useInputTodo = () => {
  const [text, setText] = useState("");

  //フォーム
  const handleSubmit = useCallback((e) => {
    setText("");
    e.preventDefault();
  }, []);

  //入力フォーム
  const handleChenge = useCallback((e) => {
    setText(e.target.value.trim());
  }, []);

  return { text, handleSubmit, handleChenge };
};

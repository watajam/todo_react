import { memo } from "react";
import { useDeleteAddTodo } from "../../hooks/useDeleteAddTodo";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";

export const ProgressTodos = memo((props) => {
  const { deleteTodo: handleProgDeleteTodo } = useDeleteTodo(props.setProgressTodo);
    const { handleAddTodo: handleCompAddTodo } = useDeleteAddTodo(
      props.setProgressTodo,
      props.setCompletionTodo,
      props.progressTodo
    );

  return (
    <div>
      <h4>進行中</h4>
      <ol>
        {props.todo.map((items, index) => {
          return (
            <div key={index}>
              <li>{items}</li>
              <button onClick={() => handleCompAddTodo(index)}>完了</button>
              <button onClick={() => handleProgDeleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ol>
    </div>
  );
});

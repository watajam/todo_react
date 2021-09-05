import { memo } from "react";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";

export const CompletionTodos = memo((props) => {
  const { deleteTodo: handleCompDeleteTodo } = useDeleteTodo(props.setCompletionTodo);

  return (
    <div>
      <h4>完了</h4>
      <ol>
        {props.todo.map((items, index) => {
          return (
            <div key={index}>
              <li>{items}</li>
              <button onClick={() => handleCompDeleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ol>
    </div>
  );
});

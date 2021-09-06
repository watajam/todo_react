import { memo } from "react";
import { useDeleteAddTodo } from "../../hooks/useDeleteAddTodo";
import { useDeleteTodo } from "../../hooks/useDeleteTodo";
import { EditTodos } from "./EditTodos";

export const IncompleteTodos = memo((props) => {
  const { deleteTodo: handleDelTodo } = useDeleteTodo(props.setTodo);
  const { handleAddTodo: handleProgAddTodo } = useDeleteAddTodo(
    props.setTodo,
    props.setProgressTodo,
    props.todo
  );

  return (
    <div>
      <h4>未着手</h4>
      <ol>
        {props.todo.map((items, index) => {
          return (
            <div key={index}>
              <EditTodos setTodo={props.setTodo} items={items} index={index} />
              <button onClick={() => handleProgAddTodo(index)}>作業開始</button>
              <button onClick={() => handleDelTodo(index)}>削除</button>
            </div>
          );
        })}
      </ol>
    </div>
  );
});

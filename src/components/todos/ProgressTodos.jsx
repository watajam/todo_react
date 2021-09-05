export const ProgressTodos = (props) => {
  return (
    <div>
      <h4>進行中</h4>
      <ol>
        {props.todo.map((items, index) => {
          return (
            <div key={index}>
              <li>{items}</li>
              <button onClick={() => props.handleAddTodo(index)}>完了</button>
              <button onClick={() => props.handleDeleteTodo(index)}>
                削除
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

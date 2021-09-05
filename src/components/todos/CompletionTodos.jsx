import React from "react";

export const CompletionTodos = (props) => {
  return (
    <div>
      <h4>完了</h4>
      <ol>
        {props.todo.map((items, index) => {
          return (
            <div key={index}>
              <li>{items}</li>
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

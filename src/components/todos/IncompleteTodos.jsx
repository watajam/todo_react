import React from "react";

export const IncompleteTodos = (props) => {
  return (
    <div>
      <h4>未着手</h4>
      <ol>
        {props.todo.map((items, index) => {
          return (
            <div key={index}>
              <li>{items}</li>
              <button onClick={() => props.handleAddTodo(index)}>
                作業開始
              </button>
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

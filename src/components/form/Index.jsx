import { memo } from "react";

export const Form = memo((props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.text}
          onChange={props.handleChenge}
          placeholder="タスクを入力してください"
        />
        <button onClick={props.handleAddTodo}>追加</button>
      </form>
    </div>
  );
});

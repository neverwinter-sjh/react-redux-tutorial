/* eslint-disable linebreak-style */
import React from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => (
  <div>
    <input type="checkbox" onClick={() => onToggle(todo.id)} defaultChecked={todo.done} />
    <span style={{ textDecoration: todo.done ? 'line-through' : 'none ' }}>
      {todo.text}
    </span>
    <button type="button" onClick={() => onRemove(todo.id)}>삭제</button>
  </div>
);

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput();
  };
  const onChange = e => {
    e.preventDefault();
    console.log(e.key);
    onChangeInput(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onKeyDown={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;

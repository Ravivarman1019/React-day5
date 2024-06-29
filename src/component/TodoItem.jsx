// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleStatusChange = (e) => {
    updateTodo({
      ...todo,
      status: e.target.value,
    });
  };

  return (
    <div className="todo-item">
      <h3>Name: {todo.name}</h3>
      <p>Description: {todo.description}</p>
      <select value={todo.status} onChange={handleStatusChange}>
        <option value="Not Completed">Not Completed</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;

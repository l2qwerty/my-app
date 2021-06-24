import React from 'react';

const styles = {
  liDone: {
    textDecoration: 'line-through',
  },
  liAtWork: {
    textDecoration: 'none',
  },
};
export default function ToDoItem({ todo, index }) {
  return (
    <li style={todo.completed ? styles.liDone : styles.liAtWork}>
      <strong>{index + 1}</strong>
      {todo.title}
    </li>
  );
}

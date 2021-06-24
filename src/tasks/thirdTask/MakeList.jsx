import React from 'react';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  liDone: {
    textDecoration: 'line-through',
  },
  liAtWork: {
    textDecoration: 'none',
  },
};

function MakeList({ list }) {
  let todos = list.todos;
  return (
    <ul style={styles.ul}>
      <li>
        <img src={list.img}></img>
      </li>
      {Object.values(todos).map((key) => (
        <li
          key={key.title}
          style={key.completed ? styles.liDone : styles.liAtWork}
        >
          {key.title}
        </li>
      ))}
    </ul>
  );
}

export default MakeList;

import React from 'react';
import ToDoItem from './ToDoItem';
import Mon from './img/monday.jpg';
import Tue from './img/tuesday.jpg';
import Wed from './img/wednesday.jpg';
import Thu from './img/thursday.jpg';
import Fri from './img/friday.jpg';
import Sat from './img/saturday.jpg';
import Sun from './img/sunday.jpg';

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
};

export default function ToDoList(props) {
  const images = [Mon, Tue, Wed, Thu, Fri, Sat, Sun];
  return (
    <div>
      <img src={images[0]}></img>
      <ul style={styles.ul}>
        {props.todos.map((todo, index) => (
          <ToDoItem todo={todo} key={todo.id} index={index} />
        ))}
      </ul>
    </div>
  );
}

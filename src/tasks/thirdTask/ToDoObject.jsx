import React from 'react';
import Mon from '../img/monday.jpg';
import Tue from '../img/tuesday.jpg';
import Wed from '../img/wednesday.jpg';
import Thu from '../img/thursday.jpg';
import Fri from '../img/friday.jpg';
import Sat from '../img/saturday.jpg';
import Sun from '../img/sunday.jpg';
import MakeList from './MakeList';

const data = [
  {
    id: 1,
    img: Mon,
    todos: {
      1: { completed: false, title: 'Купить хлебушек' },
      2: { completed: true, title: 'Купить мороженко' },
      3: { completed: false, title: 'Сходить в кино' },
      4: { completed: false, title: 'Убрать дома' },
      5: { completed: false, title: 'Помыть посуду' },
      6: { completed: false, title: 'Приготовить ужин' },
      7: { completed: false, title: 'Собрать клубнику' },
      8: { completed: true, title: 'Погладить кошечку' },
      9: { completed: false, title: 'Купить кошечке корминок' },
      10: { completed: false, title: 'Лечь спать' },
    },
  },
  {
    id: 2,
    img: Tue,
    todos: {
      1: { completed: false, title: 'Купить хлебушек' },
      2: { completed: true, title: 'Купить мороженко' },
      3: { completed: false, title: 'Сходить в кино' },
      4: { completed: false, title: 'Убрать дома' },
      5: { completed: false, title: 'Помыть посуду' },
      6: { completed: false, title: 'Приготовить ужин' },
      7: { completed: false, title: 'Собрать клубнику' },
      8: { completed: true, title: 'Погладить кошечку' },
      9: { completed: false, title: 'Купить кошечке корминок' },
      10: { completed: false, title: 'Лечь спать' },
    },
  },
  {
    id: 3,
    img: Wed,
    todos: {
      1: { completed: false, title: 'Купить хлебушек' },
      2: { completed: true, title: 'Купить мороженко' },
      3: { completed: false, title: 'Сходить в кино' },
      4: { completed: false, title: 'Убрать дома' },
      5: { completed: false, title: 'Помыть посуду' },
      6: { completed: false, title: 'Приготовить ужин' },
      7: { completed: false, title: 'Собрать клубнику' },
      8: { completed: true, title: 'Погладить кошечку' },
      9: { completed: false, title: 'Купить кошечке корминок' },
      10: { completed: false, title: 'Лечь спать' },
    },
  },
  {
    id: 4,
    img: Thu,
    todos: {
      1: { completed: false, title: 'Купить хлебушек' },
      2: { completed: true, title: 'Купить мороженко' },
      3: { completed: false, title: 'Сходить в кино' },
      4: { completed: false, title: 'Убрать дома' },
      5: { completed: false, title: 'Помыть посуду' },
      6: { completed: false, title: 'Приготовить ужин' },
      7: { completed: false, title: 'Собрать клубнику' },
      8: { completed: true, title: 'Погладить кошечку' },
      9: { completed: false, title: 'Купить кошечке корминок' },
      10: { completed: false, title: 'Лечь спать' },
    },
  },
  {
    id: 5,
    img: Fri,
    todos: {
      1: { completed: false, title: 'Купить хлебушек' },
      2: { completed: true, title: 'Купить мороженко' },
      3: { completed: false, title: 'Сходить в кино' },
      4: { completed: false, title: 'Убрать дома' },
      5: { completed: false, title: 'Помыть посуду' },
      6: { completed: false, title: 'Приготовить ужин' },
      7: { completed: false, title: 'Собрать клубнику' },
      8: { completed: true, title: 'Погладить кошечку' },
      9: { completed: false, title: 'Купить кошечке корминок' },
      10: { completed: false, title: 'Лечь спать' },
    },
  },
  {
    id: 6,
    img: Sat,
    todos: {
      1: { completed: false, title: 'Купить хлебушек' },
      2: { completed: true, title: 'Купить мороженко' },
      3: { completed: false, title: 'Сходить в кино' },
      4: { completed: false, title: 'Убрать дома' },
      5: { completed: false, title: 'Помыть посуду' },
      6: { completed: false, title: 'Приготовить ужин' },
      7: { completed: false, title: 'Собрать клубнику' },
      8: { completed: true, title: 'Погладить кошечку' },
      9: { completed: false, title: 'Купить кошечке корминок' },
      10: { completed: false, title: 'Лечь спать' },
    },
  },
  {
    id: 7,
    img: Sun,
    todos: {
      1: { completed: false, title: 'Купить хлебушек' },
      2: { completed: true, title: 'Купить мороженко' },
      3: { completed: false, title: 'Сходить в кино' },
      4: { completed: false, title: 'Убрать дома' },
      5: { completed: false, title: 'Помыть посуду' },
      6: { completed: false, title: 'Приготовить ужин' },
      7: { completed: false, title: 'Собрать клубнику' },
      8: { completed: true, title: 'Погладить кошечку' },
      9: { completed: false, title: 'Купить кошечке корминок' },
      10: { completed: false, title: 'Лечь спать' },
    },
  },
];

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

export default function ToDoObject() {
  const listTemplate = data.map((list, i) => {
    return (
      <li key={i}>
        <MakeList list={list} />
      </li>
    );
  });

  return (
    <ul style={styles.ul}>
      <li>{listTemplate}</li>
    </ul>
  );
}

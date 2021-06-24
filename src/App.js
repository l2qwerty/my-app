import './App.css';
import Buttons from './tasks/secondTask/Buttons';
import ToDoList from './tasks/thirdTask/thirdTask';
import ToDoObject from './tasks/thirdTask/ToDoObject';

function App() {
  const todos = [
    { id: 1, completed: false, title: 'Купить хлебушек' },
    { id: 2, completed: true, title: 'Купить мороженко' },
    { id: 3, completed: false, title: 'Сходить в кино' },
    { id: 4, completed: false, title: 'Убрать дома' },
    { id: 5, completed: false, title: 'Помыть посуду' },
    { id: 6, completed: false, title: 'Приготовить ужин' },
    { id: 7, completed: false, title: 'Собрать клубнику' },
    { id: 8, completed: true, title: 'Погладить кошечку' },
    { id: 9, completed: false, title: 'Купить кошечке корминок' },
    { id: 10, completed: false, title: 'Лечь спать' },
  ];
  const btnText = ['first', 'second', 'third', 'fourth', 'fifth'];
  return (
    <div className='App'>
      <Buttons btnText={btnText} />
      <ToDoList todos={todos} />
      <ToDoObject />
    </div>
  );
}

export default App;

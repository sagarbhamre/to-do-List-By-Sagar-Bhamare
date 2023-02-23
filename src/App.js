import React, { useState, useEffect } from 'react';
import './style.css';
import CompletedTasks from './CompletedTasks/CompletedTasks';
import TodoList from './TodoList/TodoList';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((results) => results.json())
      .then((data) => {
        //console.log(data);
        let tododata = data.todos;
        //console.log('tododata', tododata);
        setTodoList([...todoList, ...tododata]);
      });
  }, []);

  console.log('todoList', todoList);
  const handleSelected = (e) => {
    console.log('received::', e);
    setSelectedItems(e);
  };

  return (
    <div>
      <CompletedTasks selectedItems={selectedItems} />
      <TodoList todotasks={todoList} onSelectLanguage={handleSelected} />
    </div>
  );
}

import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import {useSelector} from 'react-redux';
import {selectTodoList} from './features/todoSlice';


function App() {
  // using the returned selectTodoList as a const
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app_container">
        <div className='app_todoContainer'>
          {
            todoList.map(item => {
              return <TodoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
              uniqueId={item.uniqueId}>

              </TodoItem>
            })
          }
        </div>
        <Input></Input>
      </div>
    </div>
  );
}

export default App;

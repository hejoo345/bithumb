import React from 'react';
import './App.css';
import MyColor from './components/MyColor';
import MyCounter from './components/MyCounter';
import TodoList from './components/TodoList';

const App:React.FC = () => {
  return (
    <div className="App">
      <h3>app.tsx 타입스크립트</h3>
        <MyColor kind='rain' desc='summer'></MyColor>
        <MyCounter></MyCounter>
        <TodoList></TodoList>
    </div>
  )};

export default App;
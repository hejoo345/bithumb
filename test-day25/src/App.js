import './App.css';
import React from 'react';
import MyColor from './components/MyColor';
import MyCounter from './components/MyCounter';

const App = (props) => {
  return(
      <div className="App">
        App.js
        <MyColor kind='bithumb' desc='bitcamp'></MyColor>
        <MyCounter></MyCounter>
      </div>
  )};

export default App;

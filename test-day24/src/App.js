import './App.css';
import React, { Fragment } from 'react';
import { My } from './components/My';

const App = (props) => {
  const add = (a,b,c,d,e) =>{
    return a+b+c+d+e;
  }

  // 첫 번째 add
  const arr = [5,2,1,3,6];
  console.log('결과 : ', add(...arr));
  console.log('-------------------------------------');

  const x = [3,4,5];
  const y = [1,2,x,6,7]; 
  console.log('결과  : ', y); // [1, 2, Array(3), 6, 7]
  console.log('-------------------------------------');

  const a = [1, 2, 3];
  const b = [7, 8, 9];
  a.push(b);
  console.log('결과 :' , a);  // [1, 2, 3, Array(3)]
  console.log('-------------------------------------');

  const k = [1, 2, 3];
  const m = { name:'mark', age:23 };
  const ob3 = [ ...k ];
  const ob4 = { ...m };
  ob3.push(ob4);
  console.log('결과 : ', ob3);
  ob4.name = '이마크';
  ob4.age = 21;
  console.log('결과 : ', ob4);
  console.log('-------------------------------------');
  
  return(
    <div>
      <h2>전개연산</h2>
    </div>
  )};

export default App;


// 첫 번재 예제
/*
import './App.css';
import React from 'react';
import { My } from './components/My';

const App = (props) => {
  return(
    <div className="App">
      app.js
      <My></My>
    </div>
  )};

export default App;

*/

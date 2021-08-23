import React, { Component } from 'react';
import './App.css';
import mark from './img/mark.JPG'
class App2 extends Component {
  state = {
    msg: { name:'friday', day:'sunday' },
    lists: [ 
      { id:1, title:'aaa', desc:'apple is a best fruit' },
      { id:2, title:'bbb', desc:'banana is a best fruit' },
      { id:3, title:'ccc', desc:'cherry is a best fruit' },
    ],
  }
  constructor(){// 생성자 
    super();
    console.log('리액트 생성자 constructor 자동호출');
    
  }
  
  componentWillMount(){
    console.log('componentWillMount 1111 자동호출');
  }
  componentDidMount(){
    console.log('componentDidMount 2222 자동호출');
  }

  render() {
    this.state.lists.map((item, idx)=>{
      console.log(idx, '=>', item);
    })

    return (
      <div className='App'>
        <img src={mark} width="300" height="300"></img>
        <h2>App.js </h2>
        {JSON.stringify(this.state.lists)}
      </div>
    );
  }
}

export default App2;
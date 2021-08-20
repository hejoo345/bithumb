import React, { Component } from 'react';
import './App.css';

class App4 extends Component {
  static defaultProps = {
    userID : 'test',
    userPW : 1234
  }

  id = 3;
  state = { 
    code : 7789,
    book : 'winter',
    todos : [
      {id: 1, msg: 'kim', flag: false},
      {id: 2, msg: 'lee', flag: true},
      {id: 3, msg: 'park', flag: false},
    ]
  }

  // 화살표 함수
  //  변수 이름 = (인자) => { 구현 }
  handleAdd = () => {
    const { code, book, todos } = this.state;
    this.setState({
      code : 9999,
      book: 'winter',
      todos : todos.concat({
        id: this.id += 1,
        msg: 'last',
        flag: true
      })
    });
  }

  handleSearch = () => {
    const { todos } = this.state;
    todos.filter(todo=>todo.flag === true).map(todo=>console.log(todo));
  }

  render() {
    const cc = { fontSize: '20pt', marginLeft:'120px'};
    const { userID, userPW } = this.props;
    const { code, book, todos } = this.state;
    
    return (
      <div style={cc}>
        <button onClick={this.handleAdd}>handleAdd 호출</button> 
        <button onClick={this.handleSearch}>handleSearch 호출</button>
        <br></br>
        props속성의 데이터 출력<br></br>
        user id = {userID} &nbsp; user pw = {userPW}
        <hr></hr>

        state항목의 데이터 출력 <br></br>
        code = {code} &nbsp; book = {book} <br></br>
        <hr></hr>
        
        {JSON.stringify(todos)}<br></br>

      </div>
    );
  }
}

export default App4;
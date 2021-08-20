import React, { Component } from 'react';
import './App.css';

class App3 extends Component {
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
  render() {
    const cc = { fontSize: '20pt', marginLeft:'120px'};
    const { userID, userPW } = this.props;
    const { code, book, todos } = this.state;
    return (
      <div style={cc}>
        props속성의 데이터 출력<br></br>
        user id = {this.props.userID} &nbsp; user pw = {this.props.userPW}<br></br>
        user id = {userID} &nbsp; user pw = {userPW}
        <hr></hr>

        state항목의 데이터 출력 <br></br>
        code = {this.state.code} &nbsp; book = {this.state.book} <br></br>
        code = {code} &nbsp; book = {book} <br></br>
        <hr></hr>
        
        {JSON.stringify(this.state.todos)}<p></p>
        {JSON.stringify(todos)}<br></br>
      </div>
    );
  }
}

export default App3;
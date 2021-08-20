import React, { Component } from 'react';
import MyColor from './components/MyColor';
import Test from './components/Test';

class App extends Component {
  static defaultProps = {
    userID : 'test',
    userPW : 1234
  }

  id = 3;
  state = { 
    code : 7789,
    book : 'summer',
    todos : [
      {id: 1, msg: 'kim', flag: false},
      {id: 2, msg: 'lee', flag: true},
      {id: 3, msg: 'park', flag: false},
    ]
  }
 
  // 화살표 함수
  //  변수 이름 = (인자) => { 구현 }
  handleAdd = () => {
    const { code, book, todos} = this.state;
    this.setState({
      code : 9999,
      book: 'winter',
      todos : [...todos, {id: 4, msg: 'last', flag: true}]
    });
  }

  render() {
    return (
      <div>
        {/* <img src="/imeges/mark.JPG" ></img> */}
        {/* <MyColor></MyColor> */}
        <Test></Test>
      </div>
    );
  }
}

export default App;
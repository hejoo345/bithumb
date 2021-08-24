import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import List from './components/List';
import Subject from './components/Subject';
import mark from './img/mark.JPG'

// 설치한 라우터를 메뉴바, navbar,
import { BrowserRouter, HashRouter, Link, Router } from 'react-router-dom';
class App extends Component {

  state = {
    msg: { title:'bithumb', sub:'bitCamp!!!' },
    lists: [ 
      { id:1, title:'rain', desc:'apple is a best fruit' },
      { id:2, title:'snow', desc:'banana is a best fruit' },
      { id:3, title:'wind', desc:'cherry is a best fruit' },
    ],
  }

  render() {
    let title2 = '';
    let desc2 = '';
    if(this.state.mode === 'read'){
      title2 = this.state.lists[this.state.selected_id - 1].title;
      desc2 = this.state.lists[this.state.selected_id - 1].desc;
    }
    return (
      <div className='App'>
        <img src={mark} width="300" height="300"></img>
        <h2>App.js </h2>
        <Subject msg={this.state.msg}></Subject>

        <List 
        data={this.state.lists} 
        onChangePage={function(id){
          this.setState({
            mode: 'read',
            selected_id: Number(id)
          });
        }.bind(this)}>

        </List>

        <Content title={title2} desc={desc2}></Content>
      </div>
    );
  }
}

export default App;
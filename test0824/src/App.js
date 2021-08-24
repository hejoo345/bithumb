import './App.css';
import React, { Component } from 'react';

import fs  from './Firestore.js';

class App extends Component {
  render() {

    console.log('파이어베이스연동확인');
    console.log(fs);

    return (
      <div>
        
        <h3> 빗썸  Firebase 연결 </h3>
      </div>
    );
  }
}

export default App;
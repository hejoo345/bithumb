import './App.css';
import React from 'react';
import jeno from './img/jeno.JPG';
import My from './components/My';
import MyNct from './components/MyNct';
import MyColor from './components/MyColor';

class App extends React.Component{
  render(){
    return (
      <div>
        <MyNct></MyNct>
      </div>
    );
  }
}

export default App;

//
// #4
/*
import './App.css';
import React from 'react';
import jeno from './img/jeno.JPG';
import My from './components/My';
import MyNct from './components/MyNct';
import MyColor from './components/MyColor';

class App extends React.Component{
  state = {
    idols: ['nct','nct127','nct dream']
  }
  render(){
    const cc = { fontSize: '20pt', marginLeft:'150px', color:'hotpink'};
    const msg = '엥시리인더하우스';

    // 여기에서 아이돌 배열 제어 시작
    let arr = this.state.idols;
    let str = [];
    // javascript에서 배열에 내용추가함수 push
    for(let i=0;i<arr.length;i++){
      str.push(<b key={i}>{arr[i]} &nbsp;</b>);
    }

    let dol = this.state.idols.map((item, idx)=>{
      return <b key={idx}>{item}&nbsp;</b>
    });


    return (
      <div style={cc}>
        {msg}<p></p>
        {str}<p></p>
        {dol}
      </div>
    );
  }
}

export default App;
*/


// #1
/*
import jeno from './img/jeno.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={jeno} width="300" height="300"></img>
        <p></p>
        우리나라<br/>
        대한민국<br/>
        엔시티<br/>

        <img src="/images/doyoung.JPG" width="300" height="300"></img>
        <p></p>
        <a href="http://www.google.com">구글</a>
    </div>
  );
}

export default App;
*/

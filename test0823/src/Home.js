import './App.css';
import hydran  from './img/hydran.png'
import a1  from './img/a1.png'
import React from 'react'; 


class Home  extends React.Component {
  render(){
  
    return (
      <div  className="App">
         <img src={a1} alt='풍선' width='600' height='200' /> <p></p>
         Home.js <p></p>
      </div>
    );
  }
}

export default Home;

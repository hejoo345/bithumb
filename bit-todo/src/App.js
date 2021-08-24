import './App.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import Content from './Content';

class App extends Component {
  render() {
    const Container = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background:  linear-gradient(
        to right,
        rgba(20, 20, 20, 0.1) 10%,
        rgba(20, 20, 20, 0.7) 70%,
        rgba(20, 20, 20, 1)
        ),
      url('https://source.unsplash.com/random/1920x1080?flower'); 
      background-size: cover;
    `;


    return (
      <div>
         <Container>
        <Content></Content>
      </Container>
      </div>
    );
  }
}

export default App;
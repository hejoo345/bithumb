import React from 'react';
import styled  from 'styled-components'
import Clock from './Clock.js'
import Todo from './Todo.js'
import Todo2 from './Todo2.js';

const Content  = () => {
    return(
    <Container>
      <Clock />
      <Todo />
    </Container>);
}

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 33px;
  width: 500px;
  height: calc(100% - 33px);
  color: white;
  overflow-y: auto;
`;


export default Content;

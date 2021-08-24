import React from "react";
import styled from "styled-components";
import TodoRow from './TodoRow.js'


const TodoList = ({my, myRemove, myUpdate}) =>{
    return(
        <Container>
           {my.map((todo,index)=>(
               <TodoRow 
                   bit={todo} 
                   key={index}
                   index={index}
                   ondelete={myRemove}
                   onupdate={myUpdate}
                   />
           ))}
        </Container>
    );
};


const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TodoList;


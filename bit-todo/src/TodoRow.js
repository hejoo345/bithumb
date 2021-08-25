import React from "react";
import styled from "styled-components";

class TodoRow  extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props === nextProps) {
          return false;
        }
        return true;
    }

    render(){
        const {bit,index, ondelete, onupdate} = this.props ;
        console.log(`${bit}컴포넌트 렌더링 test ok`) ; 
        return (
            <Container>
              <Text onClick={()=>{onupdate(index, bit)}}>{index}---{bit}</Text>
              <Buttons>
                <RemoveBtn  onClick={()=>ondelete(index)}>삭제</RemoveBtn>
              </Buttons>
            </Container>
        );
    }
}//class END

const Container = styled.div`
  margin: 13px 0;
  width: 80%;
  text-align: left;
  display: flex;
  align-items: center;
  position: relative;
`;

const Text = styled.div`
  display: inline-block; 
  cursor: pointer;
  font-size: 24px;
  &:hover {
    opacity: 0.7; color:red;
  }
`;

const Buttons = styled.div`
position: absolute;
  right: 0; 
`;


const RemoveBtn = styled.button`

font-size: 1em;
background-color: gray;
 border: none;
 border: none;
 padding: 4px 8px;
border-radius: 12px;
cursor: pointer;
`;



export default TodoRow;


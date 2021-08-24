//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://developer.mozilla.org/ko/  검색어 :  전개 구문

import React from "react";
import styled from "styled-components";
import TodoList from './TodoList.js'

class Todo2  extends React.Component {
    state ={
        todoList:[],
        information:[ 
            { id:0, name:'first', phone:'010-111' },
            { id:1, name:'two', phone:'010-222'} 
        ],
    }

    handleInputKeyPress = (event) => {
        const{target:{value}} = event; 
        if(event.key === 'Enter'){
            // HTML5에서 제공되는 local Storage = 최대 5MB저장 setItem()함수로 추가
            this.setState(state=>({todoList:[...state.todoList, value]}) ,
            ()=>localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
            );
            event.target.value=''
        }
    }//end

    handleClickRemove = (index) => {
        //slice()메소드는 배열의 부분배열을 추출 slice(시작,마지막)
        this.setState(
            state=>({
                todoList:[...this.state.todoList.slice(0,index)  , ...this.state.todoList.slice(index+1)]
            }), ()=>localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
        );
    }//end

    handleClickUpdate = (index, item) => { // 리스트 중 하나 클릭했을 때
        this.setState({
            todoInput : item,
            updateCk : 1,
            updateIdx : index,
        })
    }

    handleUpdate = (e, index)=>{ // 수정 버튼 눌렀을 때
        console.log(index);
        console.log(this.state.todoList);
        const updateTodo = this.state.todoList.map((item,idx)=>{
            return idx === index ? this.state.todoInput : item;
        })
        console.log(updateTodo);
        this.setState(state=>({
                todoList:[ ...updateTodo],
                todoInput: '',
                updateCk : 0,
            }), ()=>localStorage.setItem("todoList", JSON.stringify(this.state.todoList))
        );
    }

    handleInputChange = (e) =>{
        this.setState({
            todoInput : e.target.value
        })
    }

    //어플리케이션이 실행되어 화면에 컴포넌트가 그려지면 ComponentDidMount가 실행되므로
    //ComponentDidMount에서 localStorage에 저장된 값을 가져오면 됩니다.
    componentDidMount(){
        this.setState({
            todoList:JSON.parse(localStorage.getItem("todoList")) || []
        });
    }

    render(){
        return(
            <Container>
               <InputDiv>
                 <Input placeholder='오늘할일' 
                 onKeyPress={this.handleInputKeyPress} 
                 defaultValue={this.state.todoInput}
                 onChange={this.handleInputChange}></Input>
                 {
                    this.state.updateCk === 1 ? <UpdatdBtn onClick={(e)=>this.handleUpdate(e, this.state.updateIdx)}>수정</UpdatdBtn> : ''
                   }   
                </InputDiv> 
               <TodoList my={this.state.todoList} myRemove={this.handleClickRemove} myUpdate={this.handleClickUpdate}></TodoList>
            </Container>
        );
    }

   
}//Todo end

const Container = styled.div`
  margin-top: 44px;
  text-align: center;
`;

const InputDiv = styled.div`
  width: 80%;
  height: 33px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
display: flex;
`;

const Input = styled.input`
width: 80%;
  height: 33px;
  border: none;
  background: transparent;
  font-size: 22px;
  color: white;
  padding-left:1em;
`;

const UpdatdBtn = styled.button`
 margin-right: 1em;
 font-size: 12px;
 border: none;
 padding: 4px 8px;
border-radius: 12px;
cursor: pointer;
`;
export default Todo2;



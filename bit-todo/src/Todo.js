import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import TodoList from './TodoList.js'

const Todo = (props) => {
    const [todo, setTodo] = useState({
        todoList:[],
        information:[ 
            { id:0, name:'first', phone:'010-111' },
            { id:1, name:'two', phone:'010-222'} 
        ],
    });
    const inputRef = useRef();

    useEffect(()=>{
        setTodo(prev=>({
            ...prev, 
            todoList: JSON.parse(localStorage.getItem("todoList")) || []
        }))
    },[]);

    useEffect(()=>{
        localStorage.setItem("todoList", JSON.stringify(todo.todoList));
    },[todo]);

    const handleInputKeyPress = (event) => { // 추가 엔터 눌렀을 때
        event.preventDefault();
        if(event.key === 'Enter'){
            // HTML5에서 제공되는 local Storage = 최대 5MB저장 setItem()함수로 추가
            setTodo(prev=>({
                ...prev,
                todoList:[...prev.todoList, inputRef.current.value],
            }));
            inputRef.current.value = '';
        }
    };//end

    const handleClickRemove = (index) => {
        //slice()메소드는 배열의 부분배열을 추출 slice(시작,마지막)
        setTodo(prev=>({
            ...prev,
            todoList:[...prev.todoList.slice(0,index)  , ...prev.todoList.slice(index+1)]
            }));
    };//end

    const handleClickUpdate = (index, item) => { // 리스트 중 하나 클릭했을 때
        setTodo(prev=>({
            ...prev,
            updateCk : 1,
            updateIdx : index,
        }));
        inputRef.current.value = item;
    }

    const handleUpdate = (index)=>{ // 수정 버튼 눌렀을 때
        const updateTodo = todo.todoList.map((item,idx)=>{
            return idx === index ? inputRef.current.value : item;
        });
        setTodo(prev=>({
            ...prev,
            todoList:[ ...updateTodo],
            updateCk : 0,
        }));
        inputRef.current.value = '';
    }

    return(
        <Container>
            <InputDiv>
            <Input
            ref={inputRef}
            placeholder='오늘할일' 
            onKeyPress={handleInputKeyPress} 
            >

            </Input>
            {
                todo.updateCk === 1 ? <UpdatdBtn onClick={()=>handleUpdate(todo.updateIdx)}>수정</UpdatdBtn> : ''
                }   
            </InputDiv> 
            <TodoList my={todo.todoList} myRemove={handleClickRemove} myUpdate={handleClickUpdate}></TodoList>
        </Container>

    )};
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
export default Todo;
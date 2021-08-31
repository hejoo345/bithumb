import React, { useEffect, useRef, useState } from 'react';
import TodoItem from './TodoItem';

// interface 3개 생성
interface IInput{
    input: string;
}
interface ITodoItem{
    idx: number,
    todo: string,
    isDelete: boolean,
    onDelete?: (num: number) => void
}
interface ITodoList{
    todoList : ITodoItem[];
}

const TodoList:React.FC = (props) => {
    // const inputRef = useRef<HTMLInputElement>(null);
    const [iInput, setiInput] = useState<IInput>({ input: '' });
    const [iTodoitem, setTodoItem] = useState<ITodoItem>({
        idx: 0,
        todo: '산책가기',
        isDelete: false,
    });
    const [iTodoList, setTodoList] = useState<ITodoList>({
        todoList: []
    });

    useEffect(()=>{
        console.log('useEffect 마운트 될 때');
    },[])

    useEffect(()=>{
        console.log('item항목 업데이트 할 때 발생');
        setTodoList(prev=>({
            todoList: [...prev.todoList, iTodoitem]
        }));
    },[iTodoitem])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setiInput({ input: e.target.value });
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setTodoItem(prev=>({
            ...prev,
            idx: prev.idx + 1,
            todo: iInput.input,
            isDelete: false,
        }));
    //    if(inputRef.current) inputRef.current.value='';
        setiInput({input: ''});
    }

    const onDelete = (idx: number) => {
        const newTodo: ITodoItem[] = iTodoList.todoList.filter(todo=>todo.idx !== idx);
        setTodoList({todoList : newTodo})
    }
    const onTodoList = iTodoList.todoList.map((todo, idx)=>(
        <div key={idx}>
            <TodoItem
            idx={todo.idx}
            todo={todo.todo}
            isDelete={todo.isDelete}
            onDelete={onDelete}></TodoItem>
        </div>
    ))

    return (
            <div>
                <h1>TodoList.tsx</h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <input type='text' 
                        // ref={inputRef}
                        value={iInput.input}
                        onChange={handleInput}></input>
                        <button type='submit'>추가</button>
                    </form>
                    <div>
                        {onTodoList}
                    </div>
                </div>
            </div>
    )};

export default TodoList;
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
    // onDelete: (num: number) => void
}
interface ITodoList{
    todoList : ITodoItem[];
}

const TodoList:React.FC = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
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
        console.log('item항목 업데이트 할 때 발생');
        setTodoList(prev=>({
            todoList: [...prev.todoList, iTodoitem]
        }));
    },[iTodoitem])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setiInput({ input: e.target.value });
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTodoItem(prev=>({
            ...prev,
            idx: prev.idx + 1,
            todo: iInput.input,
            isDelete: false,
        }));
       if(inputRef.current) inputRef.current.value='';
    }

    const onDelete = (idx: number) => {
        console.log(`${idx}삭제`);
    }
    const onTodoList = () => {
    }

    return (
            <div>
                <h1>TodoList.tsx</h1>
                <div>
                    <form onSubmit={onSubmit}>
                        <input type='text' 
                        ref={inputRef}
                        defaultValue={iInput.input}
                        onChange={handleInput}></input>
                        <button type='submit'>추가</button>
                    </form>

                    {
                        iTodoList.todoList.map(todo=>(
                            <TodoItem
                            key={todo.idx}
                            idx={todo.idx}
                            todo={todo.todo}
                            isDelete={todo.isDelete}
                            onDelete={onDelete}></TodoItem>
                        ))
                        }
                </div>
            </div>
    )};

export default TodoList;
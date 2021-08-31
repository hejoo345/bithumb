import React from 'react';
interface List {
    idx: number;
    todo: string;
    isDelete: boolean;
    onDelete: (num: number) => void;

}
const TodoItem:React.FC<List> = ({idx, todo, onDelete}) => {
    const handleDelete = () =>{
        onDelete(idx);
    }
    return(
            <div>
                <span>{todo}</span>
                <button onClick={handleDelete}>삭제</button>
            </div>
    )};

export default TodoItem;
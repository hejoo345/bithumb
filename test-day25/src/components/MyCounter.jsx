import React, { useState } from 'react';

const MyCounter = (props) => { 
    const [num , setNum] = useState(0);
    const handleAdd = () =>{
        setNum(prev=>prev + 1 )
    }

    const handleSub = () =>{
        setNum(prev=>prev - 1 )
    }

    const handleRandom = () =>{
        const value = Math.floor(Math.random()*5 + 1);
        setNum(value);
    }

    const mc = {fontSize: '24pt', color: 'blue'};
    return(
            <div style={mc}> 
                MyCounter.js<p></p>
                <span>숫자 : {num}</span><p></p>
                <button onClick={handleAdd}>1씩 증가</button>
                <button onClick={handleSub}>1씩 감소</button>
                <button onClick={handleRandom}>난수 적용</button>
            </div>
    )};

export default MyCounter;
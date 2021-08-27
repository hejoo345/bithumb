import React, { useState } from 'react';
interface StateType{
    num: number;
}
const MyCounter:React.FC = (props) => { 
    // const 상수 상태관리 type 설정
    const [num , setNum] = useState<StateType>({
        num: 0
    });
    const handleAdd = () =>{
        setNum(prev=>({ num: prev.num + 1 }))
    }

    const handleSub = () =>{
        setNum(prev=> ({ num: prev.num - 1 }))
    }

    const handleRandom = () =>{
        const value = Math.floor(Math.random()*5 + 1);
        setNum({num: value});
    }

    const mc = {fontSize: '24pt', color: 'blue'};
    return(
            <div style={mc}> 
                MyCounter.tsx<p></p>
                <span>숫자 : {num.num}</span><p></p>
                <button onClick={handleAdd}>1씩 증가</button>
                <button onClick={handleSub}>1씩 감소</button>
                <button onClick={handleRandom}>난수 적용</button>
            </div>
    )};

export default MyCounter;
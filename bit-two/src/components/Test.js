// 2021.08.18 수 숙제

import React, { Component } from 'react';

class Test extends Component {
    state = {
        student : [
            { id : 1, name : 'mark', score : 80 },
            { id : 2, name : 'jisung', score : 90 },
            { id : 3, name : 'jeno', score : 70 }
        ]
    }
    render() {
        // map
        const students = this.state.student.map((item)=>(
            <div key={item.id}>
                <span>id : {item.id} </span>
                <span>name : {item.name} </span>
                <span>score : {item.score}</span>
            </div>
        ));
        
        // filter
        const scoreFilter = this.state.student.filter(item => item.score >= 80);


        // concat
        const fruits = ['사과', '바나나', '오렌지'];
        const fruits2 = ['복숭아','딸기'];
        const fruits3 = fruits.concat(fruits2);
        console.log(fruits3);
    
        // 화살표 함수
        const onClick = (e) =>{
            e.preventDefault();
            alert('버튼을 눌렀습니다.');
        }

        return (
            <div>
                <h2>학생정보 - map 사용</h2>
                <span>{students}</span>

                <h2>점수가 80점 이상인 학생 - filter 사용</h2>
                {scoreFilter.map(item=>(
                    <div key={item.id}>
                        <span>name : {item.name} </span>
                        <span>score : {item.score} </span>
                    </div>
                ))}
                <div>------------------------------------------------------</div>
                <h2>과일 배열 두 개 합치기 - concat 사용</h2>
                <span>콘솔 창 확인 부탁드립니다.</span>
                <div>------------------------------------------------------</div>
                <button onClick={onClick}>버튼</button>

            </div>
        );
    }
}

export default Test;
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import BoardForm from './components/BoardForm';
import  BoardItem  from './components/BoardItem';

export const App = ({boards}) => {
  return(
    <div className="App">
      리액트 + redux <p></p>
       <BoardForm></BoardForm> <br></br>
      
       <table border='1' cellspacing='0'  align='center'>
         <tr align='center'  bgcolor='yellow'>
            <td width='50'>No</td>
            <td width='100'>Name</td>
            <td width='200'>Title</td>
            <td width='120'>Date</td>
            <td width='100'>삭제버튼</td>
         </tr>
         {
           boards.map(row=>(<BoardItem key={row.bno} row={row}></BoardItem>))
         }
       </table>
    </div>
  )};

  let mapStateToProps = (state) => {
    //인수로 전달된 state 전체를 가르킴
    return {
      boards:state.boards,
      selectBoad:state.selectedBoard,
    };
  }
  
  const mapDispatchToProps = { }
  
  export default connect(mapStateToProps)(App)

// dispatch 최적화에 대해
// 한 dispatch에 여러 액션이 동시에 수행되도록 batching 하기
// 다만, 간단한 CRUD 앱의 경우 굳이 이런 공수를 들여 최적화할 필요는 없음
// 실시간으로 많은 양의 데이터를 주고받는 앱의 경우에 필요함
// e.g. 코인 거래소(실시간 호가 렌더), 채팅앱(실시간 동시다발적 채팅)
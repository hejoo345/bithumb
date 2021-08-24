//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://developer.mozilla.org/ko/  검색어 :  전개 구문

import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';


  class  AppPhone  extends Component {  
    id=2;
    state={
      information:[
        { id:0, name:'zero', phone:'000' },
        { id:1, name:'hong', phone:'111'}
      ],
      msg: []
    }//end

    //신규등록
    handleCreate = (data) =>{
      const { information } = this.state;
      this.setState({
        information: information.concat({id:this.id++, ...data})
      })
      console.log(data);
    }//end

    //삭제처리함수
    handleRemove = (id) =>{
      const {information } = this.state ;
      this.setState({
        information: information.filter(info => info.id !== id)
      })
    }//end

    //수정처리
    handleUpdate = (id,data) => {
      const { information } = this.state ;
      this.setState({
        information: information.map(
          info => id === info.id ? {...info, ...data} : info
        )
      })
    }//end

    render(){
      const {information} = this.state ;
      // information = this.state ;  실행에러발생 꼭 const상수키워드 추가 
      return (
        <div>
        <BrowserRouter>
          <ul className="menu-wrapper">
             <li><Link to="/"> Home </Link></li>
             <li><Link to="/profile"> Profile </Link></li>
             <li><Link to="/about"> About </Link></li>
          </ul>
          <Route  exact path="/" component={App} />
          <Route  exact path="/profile" component={App} />
          <Route  exact path="/about" component={App} />
        </BrowserRouter>
        </div>
      );
    }
} //AppPhone end

export default AppPhone;


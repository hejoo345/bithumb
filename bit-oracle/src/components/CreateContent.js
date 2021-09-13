import axios from 'axios';
import React, { Component, createRef } from 'react';

class CreateContent extends Component{

    myinput=createRef();

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.sabun.value+' '+e.target.name.value+' '+e.target.title.value + e.target.pay.value);
        let  _sabun=e.target.sabun.value;
        let  _name=e.target.name.value;
        let  _title=e.target.title.value;
        let  _pay=e.target.pay.value;
        this.callApi(_sabun,_name,_title,_pay);
        e.target.sabun.value='';
        e.target.name.value='';
        e.target.title.value="";
        e.target.pay.value="";
        this.myinput.current.focus();//입력 포커스 주기
    }

    callApi=(_sabun,_name,_title,_pay)=>{
        let url='/guestInsert.do' ;
        let guest = {sabun:_sabun, name:_name, title:_title,  pay:_pay} ;
        axios({
          method: 'post' ,
          url: url,
          data: guest,
          headers:{'content-Type':'application/json'}  
        })
        .then((res)=>{console.log(JSON.stringify(res));})
        .catch((err)=>{console.log('CreateContent err:', err.message);})
    }//end

 render(){
    return(
        <div>
        <form action="./guestInsert.do" method="post" onSubmit={this.handleSubmit}>
            사번 : <input type="text" ref={this.myinput} name="sabun"></input> <br></br>
            이름 : <input type="text" ref={this.myinput} name="name"></input> <br></br>
            제목 : <input type="text" ref={this.myinput} name="title"  ></input> <br></br>
            급여 : <input type="text" ref={this.myinput} name="pay"></input> <br></br>
                  &nbsp; &nbsp; &nbsp; <button> guest테이블 글쓰기저장 </button>
        </form> 
        </div>
    );
 }
}//class END

export default CreateContent;
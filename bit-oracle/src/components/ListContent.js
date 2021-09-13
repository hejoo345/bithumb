import axios from 'axios';
import React  from 'react';
import SubListContent from './SubListContent';

class ListContent extends React.Component{
    state = {
        loading:false,
        userid:'' ,
        memos:[]
    }

    _list= [];
    callApi=(idx)=>{
        let url='/guestList.do' ;
        axios.get(url).then((res)=>{
            console.log(JSON.stringify(res));
            let arr = res.data;
            this.setState({memos:arr, loading:false});
            this.makeList2(arr); //맨마지막기술 
        }).catch((err)=>{console.log('에러이유 = ', err.message)}) ;
    }//end

    componentDidMount(){
       console.log('componentDidMount 라이프사이클 11111111111');
       this.setState({loading:true});
       setTimeout(()=>{this.callApi(1)},500);
    }//end

    makeList2 = () =>{
        let arr = [...this.state.memos] ;
        let _lst = arr.map( (memo,i)=>{ 
            //guest(sabun,name,title,wdate,pay)  
            let _sabun= memo.sabun;
            let _name = memo.name;
            let _title = memo.title;
            let  dt = new Date(Number(memo.wdate));
            let _wdate = dt.getFullYear()+'-'+ (dt.getMonth()+1) +'-' + dt.getDate();
            let _pay = memo.pay ;
            return <SubListContent 
                    key={i} idx={_sabun}  name={_name}
                    title={_title} wdate={_wdate} pay={_pay} 
                    onClick={(_sabun)=>{this.props.onClick(_sabun)}}></SubListContent>
        });
        return _lst;
    }//end----------------------------------

 render(){
    let _lst = this.makeList2();
    return(
        <div className='col-md-3 col-sm-6'>
            <div className='card'>
               {this.state.loading===true? (<h2>Loading...</h2>):(this.makeList2())}
            </div>
        </div>
    );
 }
}//class END

export default ListContent;
import React, { Component } from 'react';

class MyNct extends Component {
    state = {
        idols: ['doyoung', 'fullsun', 'mark'],
        images: [
            '/images/doyoung.JPG',
            '/images/fullsun.JPG',
            '/images/mark.JPG'
        ]
    }
    render() {
        let arr = this.state.idols;
        let str = [];
        for(let i=0;i<arr.length;i++){
            str.push(<b key={i} style={{fontSize:'20pt'}}>{arr[i]} &nbsp;</b>);
        }

        let dol = this.state.images.map((item, i)=>{
            return (<div><img key={i} src={item} width='300' height='300'></img></div>)
        })
        return (
            <div>
                <h1>MyNct</h1>
                {str}<br></br>
                {dol}
            </div>
        );
    }
}

export default MyNct;
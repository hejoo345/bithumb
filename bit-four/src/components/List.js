import React, { Component } from 'react';

class List extends Component {
    shouldComponentUpdate(newProps, newState){
        return true;
    }
    render() {
        const mc = {fontSize:'24pt',color:'green',cursor:'pointer'};
        let mylists=[];
        let data = this.props.data;
        let i = 0;
        while(i<data.length){
            let row = data[i];
            i++;
            console.log(row.id, row.title, row.desc);
            mylists.push(<div>
                🐹<a href='{row.id}' 
                onClick={function(id, e){
                    this.props.onChangePage(id);
                    e.preventDefault();
                    }.bind(this,row.id)}>
                    {row.title}
                </a>
                </div>);
        }
        return (
            <div >
                <h3>List.js</h3>
                <div style={mc}>
                    {mylists }
                </div>
            </div>
        );
    }
}

export default List;
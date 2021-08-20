import React, { Component } from 'react';

class MyColor extends Component {
    static defaultProps = {
        kind: 'coffee',
        price : 1234,
    }
    render() {
        const mc = {fontSize:'20pt' , color:'hotpink'} ;
        const { kind,price } = this.props;

        return(
            <div>
                <h1>MyColor.js </h1>
                <div style={mc}>
                   종류: {kind} &nbsp; 가격: {price}<br></br>
                </div>
            </div>
        );
    }
}

export default MyColor;
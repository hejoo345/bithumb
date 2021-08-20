import React, { Component } from 'react';

class MyColor extends Component {
    render() {
        const cc  = {fontSize: '16pt'};
        const {kind, price} = this.props;
        return (
            <div style={cc}>

                <h1> MyColor.js</h1>
                {/* 종류 : {}
                가격 : {}
                종류 : {}
                가격 : {} */}
                
            </div>
        );
    }
}

export default MyColor;
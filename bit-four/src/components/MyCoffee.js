import React, { Component } from 'react';

class MyCoffee extends Component {
    render() {
        const mc = {fontSize:'20pt', color:'hotpink'};
        return (
            <div>
                <div style={mc}>
                    MyCoffee.js
                </div>
            </div>
        );
    }
}

export default MyCoffee;
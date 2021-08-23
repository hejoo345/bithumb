import React, { Component } from 'react';

class Content extends Component {
    render() {
        const mc = {fontSize:'20pt',color:'hotpink'}
        return (
            <div style={mc}>
                <h3>Content.js</h3>
                {this.props.title} : {this.props.desc}<p></p>
            </div>
        );
    }
}

export default Content;
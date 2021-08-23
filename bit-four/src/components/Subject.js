import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <div>
                <h1>Subject.js</h1>
                title : {this.props.msg.title}<p></p>
                sub : {this.props.msg.sub}
                <hr></hr>
            </div>
        );
    }
}

export default Subject;
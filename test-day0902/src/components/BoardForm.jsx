import React, { Component } from 'react'
import { connect } from 'react-redux';
import { board_save } from './BoardReducer.jsx';

export class BoardForm extends Component {
    state = { };

    initailSelectedBoard = {
        bno: 0,
        bname: '',
        btitle: '',
        bwdate: '',
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleSave = () => {
        this.props.dispatch(board_save(this.state));
        this.setState(this.initailSelectedBoard);
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps(nextProps) 처리단');
        this.setState(nextProps.selectedBoard);

    }
    render() {
        return (
            <div>
                BoardForm.jsx
                <div>
                    이름 : <input name='bname' value={this.state.bname} onChange={this.handleChange}></input>
                    제목 : <input name='btitle' value={this.state.btitle} onChange={this.handleChange}></input>
                    <button onClick={this.handleSave}>저장</button>
                </div>
            
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {selectedBoard: state.selectedBoard};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps)(BoardForm);
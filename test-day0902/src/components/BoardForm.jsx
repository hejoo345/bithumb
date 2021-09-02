import React, { Component } from 'react'
import { connect } from 'react-redux';
import { board_save } from './BoardReducer';

class BoardForm extends Component {
    state = {
        bNo: 0,
        bName: '',
        bTitle: '',
        bwdate: '',
    }

    initailSelectedBoard = {
        bNo: 0,
        bName: '',
        bTitle: '',
        bwdate: '',
    }

    handleChange = (e) => {

    }

    handleSave = (e) => {

    }

    componentWillReceiveProps(n){

    }
    render() {
        return (
            <div>
                BoardForm.jsx
                <form>
                    이름 : <input name='bName'></input>
                    제목 : <input name='bTitle'></input>
                    <button>저장</button>
                </form>
            
            </div>
        )
    }
}
export default BoardForm;
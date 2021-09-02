import React from 'react'
import { connect } from 'react-redux';
import { createAction, handleActions } from 'redux-actions';

// action type
const BOARD_SAVE = 'SAVE';
const BOARD_LIST = 'LIST';
const BOARD_DELETE = 'DELETE';
const BOARD_READ = 'READ';

export const board_save = createAction(BOARD_SAVE);
export const board_list = createAction(BOARD_LIST);
export const board_delete = createAction(BOARD_DELETE);
export const board_read = createAction(BOARD_READ);

const initState = {
    no: 3,
    boards:[
        { bNo: 1,  bName: 'mark',bTitle: 'nct',  bwdate: new Date()},
        { bNo: 2,  bName: 'jeno',bTitle: 'nctdream',  bwdate: new Date()}
    ]
}

export default handleActions({
    [BOARD_SAVE]:(e)=>{},
    [BOARD_LIST]:(e)=>{},
    [BOARD_DELETE]:(e)=>{},
    [BOARD_READ]:(e)=>{},
});

export const BoardReducer = (props) => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardReducer)

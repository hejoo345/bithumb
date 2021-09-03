import React from 'react'
import { createAction, handleActions } from 'redux-actions';

// action type
const BOARD_SAVE = 'SAVE';
const BOARD_DELETE = 'DELETE';
const BOARD_READ = 'READ';

export const board_save = createAction(BOARD_SAVE);
export const board_read = createAction(BOARD_READ);
export const board_delete = createAction(BOARD_DELETE, bno => bno);

const initState = {
    No: 3,
    boards:[
        { bno: 1, bname: 'mark', btitle: 'nct', bwdate: new Date()},
        { bno: 2, bname: 'jeno', btitle: 'nctdream', bwdate: new Date()},
    ],
    selectedBoard:{}
}

export default handleActions({
    [BOARD_SAVE]:(state, { payload: data })=>{
        let boards = state.boards;
        if(!data.bno){ // 추가
            let No = state.No;
            return { No: No+1, boards: boards.concat({...data, bno:No, bwdate: new Date()}), selectedBoard: {} };
        }else { // 수정
            return {...state, boards: boards.map(row => data.bno === row.bno ? {...data}: row), selectedBoard: {} };
        }
    },
    [BOARD_READ]:(state, { payload: bno })=>{
        let boards = state.boards;
        return {...state, selectedBoard: boards.find(row => row.bno === bno)};
    },
    [BOARD_DELETE]:(state, { payload: bno })=>{
        let boards = state.boards;
        return {...state, boards: boards.filter(row => row.bno !== bno), selectedBoard: {}};
    },
}, initState);
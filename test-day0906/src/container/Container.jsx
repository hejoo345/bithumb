import React, { useState } from 'react';
import BoardList from '../components/BoardList';
import BoardNew from '../components/BoardNew';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { saveDataAsync, searchDataAsync, removeDataAsync } from '../module/boardReducer';

const Container = (props) => {

    let [inputData, setInputData] = useState({
        id:'',
        bno: '',
        bname: '',
        btitle:'',
        bwdate: ''
    });

    const dispatch = useDispatch();

    const {boards, lastId} = useSelector(state => state.boardReducer);

    const onSearchButtonClick = () => {
        resetForm();
        dispatch(searchDataAsync());
    }

    const onSaveButtonClick = (data) => {
        if(lastId === 0) { // 출력할 데이터 없을 때
            alert('조회 버튼클릭 해서 데이터 출력 합니다');
            console.log('lastId = ', lastId);
            return 
        }
        dispatch(saveDataAsync(data, lastId));
    }

    const onRemoveButtonClick = (id) => {
        dispatch(removeDataAsync(id));
    }

    const onRowClick = (id, bno, bname, btitle, bwdate) => {
        setInputData({
            id:id,
            bno: bno,
            bname: bname,
            btitle: btitle,
            bwdate: bwdate
        })
    }

    const changeInput = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    // 입력 폼 초기화
    const resetForm = () => {
        setInputData({
            bno: '',
            bname: '',
            btitle: '',
            bwdate: '',
        })
    }

    return(
        <div className='App'>
            <div>
                <Table>
                    <TableHead>
                        <TableRow bgcolor='yellow'>
                            <TableCell align='center' color='red'>No</TableCell>
                            <TableCell align='center'>Name</TableCell>
                            <TableCell align='center'>Title</TableCell>
                            <TableCell align='center'>Date</TableCell>
                            <TableCell align='center'>삭제버튼</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {boards.length > 0 && boards.map(row =>
                            <BoardList
                                key={row.bno}
                                id={row.id}
                                bno={row.bno}
                                bname={row.bname}
                                btitle={row.btitle}
                                bwdate={row.bwdate}
                                onRowClick={onRowClick}
                                onRemoveButtonClick={onRemoveButtonClick}
                            />
                        )}
                    </TableBody>
                </Table>
            </div>
            <div>
                <BoardNew 
                    changeInput={changeInput}
                    inputData={inputData}
                    onSaveButtonClick={onSaveButtonClick}
                    resetForm={resetForm}
                    onSearchButtonClick={onSearchButtonClick}
                />
            </div>
        </div>
    )};

export default Container;
import React from 'react';
import './App.css';
// import  Button  from '@material-ui/core/Button';
import { Button, makeStyles } from '@material-ui/core';
import {TextField} from '@material-ui/core';


const useType = makeStyles(theme=>({
  margin:{
    margin: theme.spacing(1),
  }
}));

const App2 = (props) => {
  const classes = useType();
  return(
      <div className="App">
        <div>
          <TextField id='' label='글쓴이' name='guestName'></TextField><p></p>
          <TextField id='' label='글제목' name='guestName'></TextField><p></p>
        </div>
        <div>
          <Button variant='contained' color='primary'>1버튼</Button>
          <Button variant='contained'>2버튼</Button>
          <Button variant='contained' color='secondary' className={classes.margin}>3버튼</Button>
          <Button variant='contained' color='primary' className={classes.margin}>4버튼</Button>
        </div>
      </div>
  )};

export default App2;
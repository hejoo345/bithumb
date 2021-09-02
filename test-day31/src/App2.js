import './App.css';
import MyColor from './components/MyColor';
import axios from 'axios';
import Button from './components/Button';

function App2() {
  return (
    <div className="App">
      <div>App.js</div>
      <div>
          <Button size="large">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small">BUTTON</Button>
        </div>
        <div>
          <Button size="large" color="gray"> BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="gray">BUTTON</Button>
        </div>
        <div>
          <Button size="large" color="pink"> BUTTON </Button>
          <Button color="pink">BUTTON</Button>
          <Button size="small" color="pink"> BUTTON</Button>
        </div>
        <div>
          <Button size="large" color="blue" outline> BUTTON </Button>
          <Button color="gray" outline> BUTTON </Button>
          <Button size="small" color="pink" outline> BUTTON </Button>
        </div>
        <div>
            <Button size="large" fullWidth> BUTTON </Button>
            <Button size="large" fullWidth color="gray"> BUTTON </Button>
            <Button size="large" fullWidth color="pink">  BUTTON  </Button>
        </div>
    </div>
  );
}

export default App2;

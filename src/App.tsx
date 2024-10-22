import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import HandelHooksType from './components/HandelHooksType';
import InputType from './components/InputType';

function App() {
  return (
    <div className="App">
      {/* <Button text={"click me"} onClick={()=>{alert("this is button pressing event")}}></Button>
      <Button text={"click me"}></Button> */}

      {/*  */}

      {/* <HandelHooksType></HandelHooksType> */}
      <InputType></InputType>

    </div>
  );
}

export default App;

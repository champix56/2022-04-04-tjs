import { stat } from "fs";
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [state, setstate] = useState(0)
  return (
    <div className="App">
      DEMAT BREIZH : {state} <br/>
      <Button
        bgColor="tomato"
        lorsqueLeButtonEstClicked={(arg: any) => {
          setstate(state+1);
          console.log(state);
        }}
      >
        Hello
      </Button>
      <Button
        bgColor="tomato"
        color="blue"
        lorsqueLeButtonEstClicked={(arg: any) => {
          console.log(arg);
        }}
        type="submit"
      >
        <div>with div</div>
      </Button>
      <Button style={{border:'2px solid black', padding:'50px'}}>
        <div>div 1</div>
        <div>div 2</div>
      </Button>
    </div>
  );
}

export default App;

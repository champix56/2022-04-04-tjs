import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <Button
        bgColor="skyblue"
        lorsqueLeButtonEstClicked={(arg: any) => {
          console.log(arg);
        }}
      >
        Hello
      </Button>
      <Button
        bgColor="skyblue"
        lorsqueLeButtonEstClicked={(arg: any) => {
          console.log(arg);
        }}
      >
        <div>with div</div>
      </Button>
      <Button>
        <div>div 1</div>
        <div>div 2</div>
      </Button>
    </div>
  );
}

export default App;

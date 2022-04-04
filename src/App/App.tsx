import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <Button
        text="Text du button"
        bgColor="skyblue"
        lorsqueLeButtonEstClicked={(arg:any) => {
          console.log(arg);
        }}
      />
      <Button text="Button 3" />
    </div>
  );
}

export default App;

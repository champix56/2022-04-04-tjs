import React from "react";
import style from "./Button.module.css";

function Button(props) {
  console.log(props);
  return (
    <button
      onClick={(evt) => {
        props.lorsqueLeButtonEstClicked("Hello");
      }}
      className={style.Button}
      style={{ backgroundColor: props.bgColor }}
    >
      {props.text}
    </button>
  );
}
export default Button;

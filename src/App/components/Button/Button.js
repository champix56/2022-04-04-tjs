import React from "react";
import style from "./Button.module.css";
import PropTypes from 'prop-types'

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

Button.propTypes={
  text: PropTypes.string.isRequired,
  lorsqueLeButtonEstClicked : PropTypes.func.isRequired,
  bgColor: PropTypes.string
}
Button.defaultProps={
  lorsqueLeButtonEstClicked:()=>{console.warn('Fonction du button undefined')}
}

export default Button;

import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  console.log(props);
  return (
    <button
      onClick={(evt) => {
        props.lorsqueLeButtonEstClicked();
      }}
      className={style.Button}
      style={{...props.style, backgroundColor: props.bgColor, color: props.color }}
      type={props.type}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  lorsqueLeButtonEstClicked: PropTypes.func.isRequired,
  style: PropTypes.object,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
Button.defaultProps = {
  lorsqueLeButtonEstClicked: () => {
    console.warn("Fonction du button undefined");
  },
  bgColor: "skyblue",
  color: "white",
  type:"button"
};

export default Button;

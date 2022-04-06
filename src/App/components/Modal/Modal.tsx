import React, { ReactElement, useState } from "react";
import PropTypes from "prop-types";
import style from "./Modal.module.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
const initialState = {};
interface I_ModalProps {
  isShown: boolean;
  content: ReactElement | Array<ReactElement> | string;
  title: string | undefined;
  hide: Function;
}
export const Modal: React.FC<I_ModalProps> = (props) => {
  return (
    <div
      className={style.Modal}
      data-testid="Modal"
      style={{ display: props.isShown ? "flex" : "none" }}
    >
      <div className={style.modalContent}>
        {props.title && <div className={style.title}>{props.title}</div>}
        <div className={style.content}>{props.content}</div>
        <div className={style.buttons}>
          <Button lorsqueLeButtonEstClicked={(evt) => {props.hide();}}>Close</Button>
        </div>
      </div>
    </div>
  );
};
function mstp(s: any, p: any) {
  return {...p,...s.modal,};
}
function mdtp(dispatch: Function) {
  return {
    hide: () => {dispatch({ type: "HIDE_MODAL" });},
  };
}
export default connect(mstp, mdtp)(Modal);

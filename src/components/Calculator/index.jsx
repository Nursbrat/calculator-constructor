import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clear,
  setValue,
  setMemory,
  setOperator,
  calculate,
} from "../../features/calculatorSlice.";
import Display from "../Display";
import Numbers from "../Numbers";
import Operators from "../Operators";
import styles from "./index.module.scss";

export default function Calculator() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.calculator.value);
  const memory = useSelector((state) => state.calculator.memory);
  const operator = useSelector((state) => state.calculator.operator);

  const handleNumberClick = (num) => {
    if (value === 0) {
      dispatch(setValue(num));
    } else {
      dispatch(setValue(value * 10 + num));
    }
  };

  const handleOperatorClick = (op) => {
    if (memory === null) {
      dispatch(setMemory(value));
      dispatch(setOperator(op));
      dispatch(setValue(0));
    } else {
      dispatch(calculate());
      dispatch(setMemory(value));
      dispatch(setOperator(op));
      dispatch(setValue(0));
    }
   
  };

  const handleEqualsClick = () => {
    dispatch(calculate());
  };

  const handleClearClick = () => {
    dispatch(clear());
  };

  return (
    <div className={styles.calculator}>
      <Display/>
      <div>{value}</div>
      <Operators/>
      <Numbers/>
    </div>
  );
}

import React from "react";
import styles from './index.module.scss'

function Operators() {
  return (
    <div className={styles.operators}>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
    </div>
  );
}

export default Operators;

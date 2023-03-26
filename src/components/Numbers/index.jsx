import React from "react";
import styles from "./index.module.scss";

function Numbers() {
  return (
    <div className={styles.numbers} draggable>
      <button onClick={() => handleNumberClick(7)}>7</button>
      <button onClick={() => handleNumberClick(8)}>8</button>
      <button onClick={() => handleNumberClick(9)}>9</button>
      <button onClick={() => handleNumberClick(4)}>4</button>
      <button onClick={() => handleNumberClick(5)}>5</button>
      <button onClick={() => handleNumberClick(6)}>6</button>
      <button onClick={() => handleNumberClick(1)}>1</button>
      <button onClick={() => handleNumberClick(2)}>2</button>
      <button onClick={() => handleNumberClick(3)}>3</button>
      <button onClick={() => handleEqualsClick()}>=</button>
      <button onClick={() => handleNumberClick(0)}>0</button>
      <button onClick={() => handleClearClick()}>C</button>
    </div>
  );
}

export default Numbers;

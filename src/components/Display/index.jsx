import React from "react";
import styles from "./index.module.scss";
function Display() {
  return (
    <div className={styles.wrapper}>
      <input type="text" pattern="[0-9]+" />
    </div>
  );
}

export default Display;

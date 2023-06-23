import React from "react";
import styles from "./Lista.module.css";

export const Lista = (props) => {
  return (
    <>
      <ul className={styles.list}>{props.children}</ul>
    </>
  );
};

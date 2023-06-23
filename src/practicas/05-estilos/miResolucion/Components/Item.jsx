import React from "react";
import styles from "./Item.module.css";

export const Item = (props) => {
  return (
    <>
      <li className={styles.item}>{props.children}</li>
    </>
  );
};

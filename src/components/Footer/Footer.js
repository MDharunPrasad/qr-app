import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <p>
        <a href="#" className={styles.host}>Host !</a>
      </p>
    </footer>
  );
}
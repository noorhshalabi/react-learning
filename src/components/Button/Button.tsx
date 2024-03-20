import React from "react";
import styles from "./Button.module.css";

interface Prop {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary";
}
const Button = ({ children, onClick, color = "primary" }: Prop) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

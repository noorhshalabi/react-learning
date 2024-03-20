import React from "react";

interface Prop {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary";
}
const Button = ({ children, onClick, color = "primary" }: Prop) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

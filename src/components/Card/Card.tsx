import type { JSX } from "react";
import "./Card.css";

const Card = (props: {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`Card ${props.className} ${!props.children ? "empty" : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;

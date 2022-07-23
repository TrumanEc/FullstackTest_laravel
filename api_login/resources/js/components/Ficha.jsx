import React from "react";
import s from "./Ficha.module.css";

const Ficha = ({ color, onClick, num }) => {
  const colHexa =
    color === "red" ? "#CB4335" : color === "yellow" ? "#FFC300" : "#fff";
  return (
    <td
      style={{ background: colHexa }}
      className={s.ficha}
      onClick={() => onClick(num)}
    >
      {color !== "white" ? "4" : "."}
    </td>
  );
};

export default Ficha;

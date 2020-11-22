import React from "react";
import ButtonComponent from "./Button/Button";

const Card = ({ name, balance, check, id, toggleHandler }) => {
  return (
    <div className="card">
      <div className="name"> {name}</div>
      <div className="text"> Balance</div>
      <div className="balance">{balance}$</div>
      <div className="button">
        <ButtonComponent check={check} toggleHandler={toggleHandler} id={id} />
      </div>
    </div>
  );
};

export default Card;

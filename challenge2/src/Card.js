import React from "react";

function Card({ data, onClick, className }) {
  return (
    <div className={`card ${className || ""}`} onClick={onClick}>
      <p>Buy {data.amount} miles</p>
      <p className="card-cost">${data.cost.toFixed(2)}</p>
    </div>
  );
}

export default Card;
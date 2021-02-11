import React from "react";
import coffeeDrawImg from "../asset/coffee-draw.png";

export default function WaitingMark() {
  return (
    <div
      className="absolute flex-column justify-center items-center"
      style={{ top: "40%", left: "45%" }}
    >
      <img
        style={{ margin: 0 }}
        src={coffeeDrawImg}
        alt="A draw of coffee smug"
      />
      <span>Drink something..?</span>
    </div>
  );
}

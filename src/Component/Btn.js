import React from "react";
import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-prev.svg";

const Btn = ({ updatePosition }) => {
  const leftClick = () => {
    updatePosition();
  };

  const rightClick = () => {
    updatePosition(true);
  };

  return (
    <div className="btns">
      <button className="btn btn--left" onClick={leftClick}>
        <img
          className="bnt__img bnt__img--left"
          src={iconPrev}
          alt="previous"
        />
      </button>
      <button className="btn btn--right" onClick={rightClick}>
        <img className="bnt__img bnt__img--right" src={iconNext} alt="next" />
      </button>
    </div>
  );
};

export default Btn;

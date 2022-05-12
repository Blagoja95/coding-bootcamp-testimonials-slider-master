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
    <div className="btns bg-red flex gap-12 p-4 absolute top-1/2 left-1/4 -translate-y-6 translate-x-8">
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

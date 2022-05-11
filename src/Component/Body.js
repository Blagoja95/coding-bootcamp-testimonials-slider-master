import React from "react";
import Testimonials from "./Testimonials";

const Body = ({ position }) => {
  return (
    <div className="component__inner">
      <Testimonials position={position} />
    </div>
  );
};

export default Body;

import React, { useState } from "react";
import Body from "./Body";
import Btn from "./Btn";

const App = () => {
  const [position, setPosition] = useState(0);

  const updatePosition = (position = false) => {
    if (position === true) {
      setPosition(position--);
      if (position < 0) setPosition(1);
      return;
    }

    // right
    setPosition(position++);
    if (position > 1) setPosition(0);
  };

  return (
    //  bg-curve bg-no-repeat bg-bottom
    <main className="h-full component mx-auto mt-8 max-w-xs relative">
      <Body position={position} />
      <Btn updatePosition={updatePosition} />
    </main>
  );
};

export default App;

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
    <main className="component">
      <Body position={position} />
      <Btn updatePosition={updatePosition} />
    </main>
  );
};

export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div>
      <div>
        <div className="relative">
          <Navbar isClick={isClick} setIsClick={setIsClick} />
          <div
            className="absolute px-3 duration-100"
            style={isClick ? { left: "250px" } : { left: "80px" }}
          >
            <p>fsdfgsdffgsdgffhdhfgdhfghdghg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

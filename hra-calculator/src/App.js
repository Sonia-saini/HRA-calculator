import "./App.css";
import React, { useState } from "react";
import HouseTax from "./Components/HouseTax";
import AdvancedTax from "./Components/AdvancedTax";

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <div id="buttons">
        <button
          onClick={() => setFlag(true)}
          id={flag && "flag"}
          disabled={flag}
        >
          HOUSE RENT ALLOWANCE
        </button>
        <button
          id={!flag && "flag"}
          onClick={() => setFlag(false)}
          disabled={!flag}
        >
          ADVANCE TAX CALCULATOR
        </button>
      </div>
      {flag ? <HouseTax /> : <AdvancedTax />}
    </div>
  );
}

export default App;

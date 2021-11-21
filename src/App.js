import "./App.css";
import React from "react";
import { useState } from "react";
import MyButton from "./MyButton";

function App() {
  const [total, setTotal] = useState("0");
  return (
    <div className="container">
      <div className="calculator-container">
        Total:{total}
        <div>
          <MyButton setTotal={setTotal} total={total} digit={1} />
          <MyButton setTotal={setTotal} total={total} digit={2} />
          <MyButton setTotal={setTotal} total={total} digit={3} />
        </div>
        <div>
          <MyButton setTotal={setTotal} total={total} digit={4} />
          <MyButton setTotal={setTotal} total={total} digit={5} />
          <MyButton setTotal={setTotal} total={total} digit={6} />
        </div>
        <div>
          <MyButton setTotal={setTotal} total={total} digit={7} />
          <MyButton setTotal={setTotal} total={total} digit={8} />
          <MyButton setTotal={setTotal} total={total} digit={9} />
        </div>
        <div>
          <button
            onClick={() => {
              setTotal("0");
            }}
            value={total}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

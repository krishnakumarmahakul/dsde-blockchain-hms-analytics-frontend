import React, { useState } from "react"; // Import useState
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Histogram from "./components/Visualisation/Histogram/histogram";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4">Histogram</h1>
      <Histogram />
    </div>
  );
}

export default App;

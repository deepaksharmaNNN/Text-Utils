import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below." />
      </div>
    </>
  );
}

export default App;

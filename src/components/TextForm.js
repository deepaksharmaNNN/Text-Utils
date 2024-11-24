import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpparCaseClick = () => {
    console.log("UpparCase was clicked");
    setText(text.toUpperCase());
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myTextBox"
          value={text}
          onChange={handleOnChange}
          rows="7"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpparCaseClick}>
        Convert to UpparCase
      </button>
    </div>
  );
}

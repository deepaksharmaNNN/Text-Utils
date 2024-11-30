import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpparCaseClick = () => {
        // console.log("UpparCase was clicked");
        setText(text.toUpperCase());
    };
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };
    const handleLowerCaseClick = () => {
        // console.log("Lowercase was clicked");
        setText(text.toLowerCase());
    };
    const handleCopy = () => {
        // console.log("Lowercase was clicked");
        var text = document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        // console.log("Lowercase was clicked");
        setText(text.replace(/\s+/g, " "));
    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange} rows="7"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpparCaseClick}>Convert to UPPARCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={() => setText("")}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes required to read</p>
                <h3>Preview of text</h3>
                <p>{text}</p>
            </div>
        </>
    );
}

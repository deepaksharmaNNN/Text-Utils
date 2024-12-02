import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpparCaseClick = () => {
        setText(text.toUpperCase());
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
    };
    const handleCopy = () => {
        var text = document.getElementById("myTextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        setText(text.replace(/\s+/g, " "));
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myTextBox" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        rows="7"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpparCaseClick}>Convert to UPPARCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCaseClick}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={() => setText("")}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.length === 0 ? "0" : text.split(" ").length} words and {text.length} characters</p>
                <p>{text.length === 0 ? "0" : (0.008 * text.length).toFixed(2)} Minutes required to read</p>
                <h3>Preview of text</h3>
                <p>{text.length > 0 ? text : "Enter some text to preview here!"}</p>
            </div>
        </>
    );
}

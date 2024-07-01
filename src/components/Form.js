import React, { useState } from "react";
export default function Form(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    //console.log("Lowercase was clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text erased", "success");
  };
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  const handleAltClick = () => {
    console.log("Alternating case was clicked");
    setText(toAlternatingCase(text));
    props.showAlert("Text is Alternated", "success");
  };

  const toAlternatingCase = (str) => {
    return str
      .split("")
      .map((char, index) =>
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
      )
      .join("");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text is copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces", "success");
  };

  const [text, setText] = useState("Enter your text here");
  //text = "new text"; //wrong way to change the state
  // setText = ("new text"); //correct way to change the

  const wordCount = text
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleAltClick}>
          Alternate Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Space Manage
        </button>
        <button
          type="button"
          className="btn btn-danger mx-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * wordCount} Minutes to read</p>
        <h2>Preview </h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above text box to preview it here"}
        </p>
      </div>
    </>
  );
}

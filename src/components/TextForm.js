import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
// import Swal from 'sweetalert2'

function TextForm(props) {
  const [text, setText] = useState("");

  //method for text area on click
  const UpperCase = () => {
    if (text === "") {
      console.log("Text Area is Empty");
    } else {
      console.log("Text is Upper Case Now");
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Upper Case","success");
    }
  };

  const LowerCase = () => {
    if (text === "") {
      console.log("Text Area is Empty");
    } else {
      console.log("Text is Lower Case Now");
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case","success");
    }
  };

  const ClearText = () => {
    if (text === "") {
      console.log("Text Area is Empty");
    } else {
      console.log("Text is cleared Now");
      //   let newText = text.toLowerCase();
      setText("");
      props.showAlert("Text Area is Emptied","success");
    }
  };

  const textOC = (event) => {
    console.log("Text Changed");
    setText(event.target.value);
  };

  const wordLength = () => {
    if (text === "") {
      return "0";
    } else {
      return text.split(" ").length;
    }
  };

  const wordTime = () => {
    if (text === "") {
      return "0";
    } else {
      let wordtime = text.split(" ").length * 0.008;
      return wordtime;
    }
  };

  const TextCopy = () => {
    if (text==="") {
      // props.showAlert("There is nothing to Copy","success");
    }
    else{
      // text.target.select();
      props.showAlert("Text has been copied successfully","success");
    }
  };



  return (
    <div >
      {/* Text Area and Button */}
      <div className="container">
        <h1 className="textToggle">{props.heading}</h1>
        {/* Text area */}
        <div className="mb-3">
          <textarea
            className="form-control textToggle"
            id="myBox"
            rows="10"
            value={text}
            onChange={textOC}
            placeholder="Enter the Text"
          ></textarea>
        </div>

        {/* buttons */}
        <div className="container d-flex justify-content-between">
          <div className="row align-items-start">
          <div className="col">
          {/* button upper case */}
          <button className={`btn btn-${props.colorMode} mb-2`} onClick={UpperCase}>
            Upper Case
          </button>
          &nbsp;
          {/* button lower case */}
          <button className={`btn btn-${props.colorMode} mb-2`} onClick={LowerCase}>
            Lower Case
          </button>
          &nbsp;
          {/* button copy to clipboard */}
          <button className={`btn btn-${props.colorMode} mb-2`} id="copyBtn">
            <CopyToClipboard text={text} onCopy={TextCopy}>
              <span>Copy to Clipboard</span>
            </CopyToClipboard>
          </button>
            </div>
          </div>

            <div className="row align-items-end">
              <div className="col">
                {/* button clear */}
                <button className={`btn btn-${props.colorMode} mb-2`} onClick={ClearText}>
                  Clear
                </button>
              </div>
            </div>
        </div>
      </div>

      {/* Text Information */}
      <div className="container my-3">
        <h5 className="WordInfo textToggle">Text Information</h5>
        <p className="textToggle">
          {" "}
          {wordLength()} words, {text.length} characters, approximate{" "}
          {wordTime()} minutes to read
        </p>
      </div>
    </div>
  );
}

export default TextForm
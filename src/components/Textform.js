import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleupclick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = ()=>{
    console.log("I am copy");
    // let content = document.getElementById("mybox");
    // content.select();
    navigator.clipboard.writeText(text);
  }

  const handleCleartext = ()=> {
    setText('');
  }
  return (
    <>
      <div className="container"  style = {{backgroundColor : props.mode === 'light'?'white':'#042743' ,color : props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style = {{backgroundColor : props.mode === 'light'?'white':'grey' ,color : props.mode === 'light'?'black':'white'}}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleupclick} >
          Convert To Uppercase
        </button>
        <button className="btn btn-primary my-3" onClick={handleCopy} >
          Copy Text
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleCleartext} >
          Clear Text
        </button>
      </div>
      <div className="container"  style = {{backgroundColor : props.mode === 'light'?'white':'#042743' ,color : props.mode === 'light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words amd {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter someting in the text box to preview it'}</p>
      </div>
    </>
  );
}

import { useState } from "react";
import './App.css';
import TextField from '@mui/material/TextField';
import Linebreak from './component/Linebreak';

const lengthToBreak = 50; // static for now

function App() {
  const [stringText, setStringText] = useState("");
  const [resultText, setResultText] = useState("");

  function splitTheMessage(stringText, lengthToBreak) {
    const result = [];
    let lines = '';
    let tempString = '';
    const words = stringText.trim().split(' ');
    let arrayLength = 0;

    for (arrayLength; arrayLength < words.length;) {

      // first character > 50
      // divide if < 50 into 2 parts
      tempString = wordsAddToLine(lines, words[arrayLength]);
      if (tempString.length > lengthToBreak) {
        // handle first word of more tn limited length
        // if (lines.length === 0) {
        //   lines = tempString.substring(0, lengthToBreak - 3) + '...';
        //   arrayLength++;
        // }
        result.push(lines); // add line
        lines = ''; // null the assignments
      } else {
        // add word to take new line
        lines = tempString;
        arrayLength++;
      }
    }

    if (lines.length > 0) {
      result.push(lines);
    }

    return result;
  }

  function wordsAddToLine(line, words) {
    if (line.length !== 0) {
      line += ' ';
    }
    return line += words;
  }

  function breakTheString() {
    if (stringText.length > 0) {
      let updatedString = splitTheMessage(stringText, lengthToBreak);
      setResultText(updatedString);
      console.log("#updatedString", updatedString);
    } else {
      alert('kindly enter some words');
    }
  }

  return (
    <>
      <div className="home">
        <div className="header row">
          <Linebreak />
          <TextField
            id="outlined-basic"
            name="stringText"
            helperText="Once you submit, message will be divided into specific characters"
            label="Input your message here"
            value={stringText}
            onChange={e => setStringText(e.target.value)}
            style={{ width: 750, height: 50 }}

          ></TextField >
          {/* <input
            id="outlined-basic"
            name="stringText"
            helperText="Once you submit, message will be divided into specific characters"
            label="Input your message here"
            value={stringText}
            onChange={e => setStringText(e.target.value)}
            style={{ width: 500, height: 50 }}
          /> */}
          <button onClick={breakTheString} className="button">Send</button>

        </div>
        {resultText ?
          <div>
            <h2>Updated message</h2>
            {resultText && resultText.map((value, index) => {
              return <div key={index}>{index + 1}/{resultText.length}  {value} {value.length}</div>
            })}
          </div> : ""}
      </div >
    </>
  );
}

export default App;

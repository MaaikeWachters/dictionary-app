import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  
  return (
    <div className="Phonetic">
      
      <audio controls src={props.phonetic.audio}></audio>
      <br />
      {props.phonetic.text}
    </div>
  );
}

import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms[0]) {
    return (
      <div className="Synonyms">
      <div className="SynonymsHeader">
          <strong>Synonyms:</strong>
        </div>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}

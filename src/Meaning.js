import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <section key={index}>
            <h3>{props.meaning.partOfSpeech}</h3>
            <strong>Definition: </strong> {definition.definition}
            <br />
            <Example example={definition.example} />
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </section>
        );
      })}
    </div>
  );
}

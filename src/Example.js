import React from "react";

export default function Example(props) {
  if (props.results) {
    return (
      <h2>
        <strong>Example: </strong>
        <em>{props.definition.example}</em>
      </h2>
    );
  } else {
    return null;
  }
}

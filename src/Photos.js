import React from "react";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <img src={props.photos.src.landscape} alt={props.photos.alt} />
      </section>
    );
  } else {
    return null;
  }
}

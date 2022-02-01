import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos row">
        {props.photos.photos.map(function (photo) {
          return (
            <div className="col-4" key={photo.id}>
              <img className="img-fluid pb-3" src={photo.src.tiny} alt={photo.alt} />
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos row">
        {props.photos.photos.map(function (photo) {
          return (
            <div className="col-4" key={photo.id}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  className="img-fluid pb-3"
                  src={photo.src.tiny}
                  alt={photo.alt}
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}

import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <a href={url} className="card-link">
        <img className="card-img" src={url} alt={title} />
      </a>
    </div>
  );
};

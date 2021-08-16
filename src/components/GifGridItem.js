import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <h2>{title}</h2>
      <img src={url} alt={title}></img>
    </div>
  );
};

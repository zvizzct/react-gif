import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <section className="section-cards">
      <div className="container">
        <h3 className=" animate__animated animate__fadeIn">{category}</h3>
        {loading && (
          <p className=" animate__animated animate__flash">Loading</p>
        )}
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      </div>
    </section>
  );
};

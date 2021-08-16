import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Footer } from "./components/Footer";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  return (
    <main>
      <div className="section-input">
        <h2>React Gif App - GIPHY</h2>
        <p className="phrase">Prueba a buscar un gif!</p>
        <AddCategory setCategories={setCategories} />
      </div>

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      <Footer />
    </main>
  );
};

export default GifExpertApp;

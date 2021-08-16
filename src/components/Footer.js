import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="contenedor-footer">
        <div className="content-foo">
          <h4>Linkedin</h4>
          <a href="#">(Working on it)</a>
        </div>
        <div className="content-foo">
          <h4>Email</h4>
          <p>victor.puerta01@estudiant.upf.edu</p>
        </div>
        <div className="content-foo">
          <h4>Web</h4>
          <a href="#" target="_blank">
            Working on it
          </a>
        </div>
      </div>
      <h2 className="titulo-final">&copy;Víctor Puerta</h2>
      <p className="curso">React: curso de Fernando Herrera</p>
    </footer>
  );
};

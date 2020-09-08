import React from "react";

function Bienvenida() {
  return (
    <section id="bienvenida" className="mt-5">
      <h5>Bienvenidos</h5>
      <p className="lead">
        Aquí encontrarán contenido de apoyo para el desarrollo de la auxiliatura
        de Laboratorio de Computación.
      </p>
      <p className="lead">El curso comprende basicamente de tres temas:</p>
      <ul>
        <li>Introducción a bash</li>
        <li>HTML5 y CSS3</li>
        <li>JavaScript</li>
      </ul>
    </section>
  );
}

export default Bienvenida;

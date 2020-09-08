import React from "react";

function Bienvenida() {
  return (
    <section id="bienvenida" className="mt-5">
      <h5>Bienvenidos</h5>
      <p className="lead">
        Aquí encontrarán contenido de apoyo para el desarrollo de la auxiliatura
        de Introduccion a la Programacion.
      </p>
      <p className="lead">El curso comprende:</p>
      <ul>
        <li>Inf-111 Introducción a la informática</li>
        <li>Lab-111 Laboratorio de informática</li>
      </ul>
      <p className="lead">
        Cabe indicar que son materias complementarias. Lab-111 corresponde a los
        ejercicios de programación que corresponden a la materia de Inf-111.
      </p>
    </section>
  );
}

export default Bienvenida;

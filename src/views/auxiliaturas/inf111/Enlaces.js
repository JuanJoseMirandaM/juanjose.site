import React from "react";

function Enlaces() {
  return (
    <>
      <div className="sidebar-box">
        <div className="categories">
          <h3>Enlaces</h3>
          <li>
            <a
              href="https://usuarios.umsa.bo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Usuarios UMSA
            </a>
          </li>
          <li>
            <a
              href="https://sigaf.fcpn.edu.bo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              SIGAF FCPN
            </a>
          </li>
          <li>
            <a
              href="https://cvfcpn.umsa.bo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Campus virtual
            </a>
          </li>
          <li>
            <a
              href="https://jv.umsa.bo/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Juez Virtual
            </a>
          </li>
        </div>
      </div>
      <div className="sidebar-box">
        <div className="categories">
          <h3>Classroom</h3>
          <li>
            Codigo Classroom:{" "}
            <strong>
              <h4>albol2j</h4>
            </strong>
          </li>
          <li>
            Ingresa a classroom{" "}
            <a
              style={{ display: "inline" }}
              rel="noopener noreferrer"
              href="https://classroom.google.com/u/2/c/MTQ4MzMzMjM1NzE5?cjc=albol2j"
              target="_blank"
            >
              AQUI
            </a>
          </li>
          *Dentro del classroom encontraran material y la coordinacion
        </div>
      </div>
    </>
  );
}

export default Enlaces;

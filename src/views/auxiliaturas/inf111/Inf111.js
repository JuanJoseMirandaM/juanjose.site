import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import Inf111Header from "components/Headers/Inf111Header.js";
import Enlaces from "./Enlaces";
import Bienvenida from "./01Bienvenida";
import Anaconda from "./02InstallAnaconda";
import Condicionales from "./05Condicionales";
import TiposdeDatos from "./04TiposdeDatos";
import Introduccion from "./03Introduccion";

function Inf111() {
  return (
    <>
      <Inf111Header />
      <div className="section profile-content">
        <Container>
          <section className="title-section">
            <div className="container mt-5">
              <h2 className="title">INF-111|LAB-111</h2>
              <h4 className="description">Introducción a la Programación</h4>
            </div>
          </section>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-4 sidebar order-md-2">
                  <Enlaces />
                </div>
                <div className="col-md-8 blog-content order-md-1">
                  <Condicionales />
                  <TiposdeDatos />
                  <Introduccion />
                  <Anaconda />
                  <Bienvenida />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Inf111;

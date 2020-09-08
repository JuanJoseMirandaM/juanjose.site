import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import Inf113Header from "components/Headers/Inf113Header.js";
import Enlaces from "./Enlaces";
import Bienvenida from "./01Bienvenida";
import Introduccion from "./02Introduccion";

function Inf113() {
  return (
    <>
      <Inf113Header />
      <div className="section profile-content">
        <Container>
          <section className="title-section">
            <div className="container mt-5">
              <h2 className="title">INF-113</h2>
              <h4 className="description">Laboratorio de Computación</h4>
            </div>
          </section>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-4 sidebar order-md-2">
                  <Enlaces />
                </div>
                <div className="col-md-8 blog-content order-md-1">
                  <Bienvenida />
                  <Introduccion />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Inf113;

/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function HomeHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/inicio.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">
                ¡Hola! Yo soy Juan Jose<span className="typed-words"></span>
              </h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Auxiliar de docencia en la carrera de Informatica
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;

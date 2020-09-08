import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

function SectionPasos() {
  return (
    <>
      <div className="section section-buttons">
        <Container>
          <Row>
            <Col lg="4" md="6">
              <div className="title">
                <div className="p-3 box-with-humber">
                  <div className="number-behind">01.</div>
                  <h2 className="text-primary">Aprende</h2>
                  <p className="mb-4">
                    En esta pagina podras encontrar material para mejorar tus
                    conocimientos y poder recibir la ayudantia correspondiente.
                  </p>
                  <ul className="list-unstyled ul-check primary">
                    <li>Tutoriales</li>
                    <li>Libros</li>
                    <li>Diapositivas</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="title">
                <div className="p-3 box-with-humber">
                  <div className="number-behind">02.</div>
                  <h2 className="text-primary">Investiga</h2>
                  <p className="mb-4">
                    La carrera de Informatica se basa en ser auto-suficiente y
                    didactico. Ponte las pilas y investiga mucho mas.
                  </p>
                  <ul className="list-unstyled ul-check primary">
                    <li>Diseño web</li>
                    <li>Desarrollo web y de aplicaciones</li>
                    <li>Programacion con Python</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg="4" sm="12">
              <div className="title">
                <div className="p-3 box-with-humber">
                  <div className="number-behind">03.</div>
                  <h2 className="text-primary">Crea</h2>
                  <p className="mb-4">
                    Al final de cada curso podras crear muchos proyectos.
                  </p>

                  <ul className="list-unstyled ul-check primary">
                    <li>FunkoPage</li>
                    <li>COVID-19</li>
                    <li>Recomendador de comidas</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionPasos;

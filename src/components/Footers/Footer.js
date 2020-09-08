/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <span className="copyright">
              By <strong>Juan Jose </strong>&copy;{new Date().getFullYear()}{" "}
            </span>
          </nav>
          <div className="credits ml-auto">
            <span className="">
              <a
                href="https://api.whatsapp.com/send?phone=59170112241"
                target="_blank"
                className="pl-3 pr-3"
              >
                <span className="icon-whatsapp"></span>
              </a>
              <a
                href="https://www.facebook.com/jjsmm"
                target="_blank"
                className="pl-3 pr-3"
              >
                <span className="icon-facebook-square"></span>
              </a>
              <a
                href="https://github.com/JuanJoseMirandaM"
                target="_blank"
                className="pl-3 pr-3"
              >
                <span className="icon-github"></span>
              </a>
              <a
                href="https://www.linkedin.com/in/juanjosemirandam"
                target="_blank"
                className="pl-3 pr-3"
              >
                <span className="icon-linkedin"></span>
              </a>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

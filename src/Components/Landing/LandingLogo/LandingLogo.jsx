import logo from "../../../logo.svg";
import { Container } from "react-bootstrap";

function LandingLogo() {
  return (
    <div>
      <div className="LogoContainer position-relative">
        <div className="imgBg"></div>
        <img className="Logo" src={logo} width="800rem" alt="Logo" />
      </div>
      <Container className="text-center py-5">
        <h2>
          <strong>
            {/* Passion, hardwork, and the hope that you will enjoy the ride. */}
            Coming Soon.
          </strong>
        </h2>
      </Container>
    </div>
  );
}

export default LandingLogo;

import "./App.scss";
import logo from "./logo.svg";
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" expand="lg" fixed="top" className="mt-3">
        <Container>
          <Navbar.Brand href="#home">DANTO GAMES</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="NavbarToggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Games</Nav.Link>
              <Nav.Link href="#">News</Nav.Link>
              <Nav.Link href="#">Gallery</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="LogoContainer position-relative">
        <div className="imgBg"></div>
        <img className="Logo" src={logo} width="800rem" alt="Logo" />
        <div className="position-absolute">A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
      </div>
    </div>
  );
}

export default App;

import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" className="py-md-2">
      <Container>
        <Navbar.Brand as={Link} to="/">
          DANTO GAMES
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="NavbarToggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={NavLink} to="/news">
              News
            </Nav.Link>
            <Nav.Link as={NavLink} to="/games">
              Games
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

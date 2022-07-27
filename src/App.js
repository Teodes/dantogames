import "./App.scss";
import logo from "./logo.svg";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function App() {
  const db = getFirestore();
  const newsCollection = collection(db, "news");

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
            <Nav className="justify-content-end flex-grow-1 pe-3">
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
      </div>
      <Button
        onClick={() =>
          addDoc(newsCollection, {
            img: "http://www.monomipark.com/img/mp_logo.png",
            titulo: "ADIOS",
            subtitulo: "Bienvenidos a mi primera noticia",
            cuerpo:
              "Reprehenderit ullamco magna ex occaecat ullamco officia cillum culpa consectetur. Labore adipisicing incididunt dolor voluptate do ullamco pariatur minim do sint. Aliqua proident consectetur magna culpa ut officia ex tempor ea pariatur exercitation. Reprehenderit anim nisi proident tempor. Laborum adipisicing laboris labore voluptate reprehenderit tempor duis est sunt. Deserunt magna incididunt enim qui id enim in id. Ad laborum consectetur mollit sit eiusmod ullamco reprehenderit voluptate est tempor.",
          })
        }
      >
        Click Me!
      </Button>
    </div>
  );
}

export default App;

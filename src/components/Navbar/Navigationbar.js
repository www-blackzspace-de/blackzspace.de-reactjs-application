import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://blackzspace.de">blackzspace.de</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
            <Nav.Link eventKey="2" href="https://board.blackzspace.de/">Board</Nav.Link>
            <Nav.Link eventKey="3" href="https://element.blackzspace.de/">Matrix</Nav.Link>
            <Nav.Link eventKey="11" as={Link} to="/stream">Stream</Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/news">News</Nav.Link>
            <Nav.Link eventKey="5" as={Link} to="/tutorials">Tutorials</Nav.Link>
            <Nav.Link eventKey="6" as={Link} to="/downloads">Downloads</Nav.Link>
            <Nav.Link eventKey="7" as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link eventKey="8" href="https://git.blackzspace.de/">Git</Nav.Link>
            <Nav.Link eventKey="9" href="https://hub.blackzspace.de/">Docker</Nav.Link>
            <Nav.Link eventKey="10" as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey="11" as={Link} to="/login">Login</Nav.Link>
            <Nav.Link eventKey="12" as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
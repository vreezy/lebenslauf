// Components
import useSiteStore from "@/stores/site";
import { containerStyles } from "@/styles/styles";
import { Button } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  const setEditIsOpen = useSiteStore((state) => state.SetEditIsOpen);
    
  return (
    <section className="noPrint">
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      
    >
      <div className="container" style={containerStyles}>
        <Navbar.Brand href="#home">Lebenslauf - Lars Eschweiler</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            <Button onClick={() => window.print()}>Drucken</Button>
            <Button onClick={() => setEditIsOpen(true)}>Drucken</Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </section>
  );
}

export default Navigation;

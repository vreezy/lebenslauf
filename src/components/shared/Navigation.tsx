// Components
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { jsPDF } from "jspdf";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

function Navigation() {
  const pdfRef = useSiteStore((state) => state.pdfRef, shallow);

  function generatePDF() {
    console.log(pdfRef)
    if (pdfRef?.current) {
      const doc = new jsPDF({
        orientation: "p",
        unit: "px",
        format: "a4",
      });

      const content = pdfRef.current;


        doc.html(content, {
          callback: function (doc) {
              doc.save('lebenslauf.pdf');
          }
      });


    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
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
            <Button variant="outline-success" onClick={generatePDF}>Download PDF</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

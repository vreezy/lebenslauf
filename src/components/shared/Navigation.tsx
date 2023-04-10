// Components
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import * as htmlToImage from 'html-to-image';

import { jsPDF } from "jspdf";

// Stores
import useSiteStore from "@/stores/site";
import { shallow } from "zustand/shallow";

function Navigation() {
  const pdfRef = useSiteStore((state) => state.pdfRef, shallow);

  function generatePDF() {
    
    if (pdfRef?.current) {
      const doc = new jsPDF({
        orientation: "p",
        unit: "px",
        format: "a4",
      });

      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();

      const PIXEL_IN_MM = 0.2645833333

      const content = pdfRef.current;

      htmlToImage.toPng(content)
      .then(function (dataUrl: any) {
        // var img = new Image();
        // img.src = dataUrl;
        console.log(dataUrl)

 
        const img = new Image();
        img.src = dataUrl;
        const div = document.createElement("div");

        div.id = "imageDiv";
        div.appendChild(img)
        document.body.appendChild(div);


        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;

        console.log("YYYY", pdfWidth, pdfHeight)
        console.log("XXX", imgWidth , imgHeight )


        const scale = 100 / pdfWidth * imgWidth
        const width = pdfWidth
        const height = imgHeight / scale * 100

        console.log("ZZZ", scale, width, height)
        const quality = 1 // Higher the better but larger file
        doc.addImage(dataUrl, 'PNG', 0, 0, width, height);
        let heightLeft = height - pdfHeight
        let position = 0

        while (heightLeft >= 0) {
          position += heightLeft - height; // top padding for other pages
          doc.addPage();
          doc.addImage(dataUrl, 'PNG', 0, position, width, height);
          heightLeft -= pdfHeight;
        }

        doc.save('lebenslauf.pdf');
  

        // doc.html(div, {
          

        //   callback: (doc => doc.save('lebenslauf.pdf'))
        // })
         
        // delete image

        
      })
      .catch(function (error:any ) {
        console.error('oops, something went wrong!', error);
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

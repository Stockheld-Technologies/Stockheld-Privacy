import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas  from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container  from 'react-bootstrap/Container';
import { FormControl } from 'react-bootstrap';


function MyNavbar() {
    return (
      <div className="Navbar">
        <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="/">Stockheld Technologies | Privacy Center</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Policies and Partners</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Stockheld Privacy Policy</Nav.Link>
          <Nav.Link href="#action2">Stockheld Terms of Service</Nav.Link>
          <NavDropdown title="Partners" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="/partners/pomfretschool/privacy">Pomfret School DIC- Privacy Policy</NavDropdown.Item>
            <NavDropdown.Item href="/partners/pomfretschool/terms">Pomfret School DIC- Terms of Service</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/partners/about">
              About our partners
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
      </div>
    );
  }
  
  export default MyNavbar;
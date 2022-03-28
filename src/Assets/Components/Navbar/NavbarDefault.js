import React from "react";
import home from "../../img/home.png";
import '../../Css/style.css'
import truck from "../../img/truck.png";
import logoProfile from "../../img/logoProfile.png";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

export const NavbarDefault = () => {
  return (
    <div className="container-dashboard">
      <div className="content-nav">
        <div className="nav-left">
          <div>
            <div className="box1"></div>
          </div>
          <div>
            <img className="img-nav-dashboard" src={home} alt="#"></img>
            <p className="text-nav-left">Dashboard</p>
          </div>
          <div>
            <img className="img-nav-truck" src={truck} alt="#"></img>
            <p className="text-nav-left">Cars</p>
          </div>
        </div>
        <div className="nav-top">
          <div className="navbar">
            <div className="box2"></div>

            {/* navbar */}
            <Navbar expand={false}>
              <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">Link</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id="offcanvasNavbarDropdown"
                      >
                        <NavDropdown.Item href="#action3">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
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
            {/* navbar 2 */}
            <Navbar className="navbar-search" expand="lg">
              <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  ></Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button id="nav-search">Search</Button>
                    <img
                      className="img-nav-profile"
                      src={logoProfile}
                      alt="#"
                    ></img>
                    <NavDropdown
                      title="Unis Badri"
                      id="navbarScrollingDropdown"
                    >
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </div>
  );
};

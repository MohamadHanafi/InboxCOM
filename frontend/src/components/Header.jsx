import React from "react";

//bootsrap
import { Container, Navbar, Nav } from "react-bootstrap";

//dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInbox, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">InboxCOM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
            <Nav className="ml-auto">
              <Nav.Link href="#h">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faInbox} /> Inbox
              </Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faUser} /> Sing In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

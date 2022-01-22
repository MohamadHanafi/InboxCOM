import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { USER_LOGOUT } from "../constants/userConstants";

//bootstrap
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

//components
import LoginModal from "./LoginModal";

//dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInbox, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => setShowLogin(!showLogin);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      setShowLogin(false);
    }
  });

  const logoutHandler = () => {
    dispatch({ type: USER_LOGOUT });
    localStorage.removeItem("userInfo");
  };

  return (
    <header>
      <LoginModal show={showLogin} toggleLogin={toggleLogin} />
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">InboxCOM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-row-reverse">
            <Nav className="ml-auto">
              <Nav.Link href="#h">
                <FontAwesomeIcon icon={faHome} /> Home
              </Nav.Link>
              {userInfo ? (
                <Nav.Link href="#">
                  <FontAwesomeIcon icon={faInbox} /> Inbox
                </Nav.Link>
              ) : (
                <></>
              )}
              {!userInfo ? (
                <Nav.Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLogin();
                  }}
                >
                  <FontAwesomeIcon icon={faUser} /> Sing In
                </Nav.Link>
              ) : (
                <>
                  <NavDropdown title={` ${userInfo.name}`}>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import CustomModal from "../components/CustomModal";

//bootstrap
import { Button, Form, Image } from "react-bootstrap";

import laptopImage from "../assets/laptop.png";

const HomeScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // state login Form
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const toggleShowLogin = () => setShowLogin(!showLogin);
  const toggleShowRegister = () => setShowRegister(!showRegister);

  const handleLogin = () => {
    console.log("emailLogin", emailLogin);
    console.log("passwordLogin", passwordLogin);
    toggleShowLogin();
  };

  const handleRegister = () => {
    console.log("register");
    toggleShowRegister();
  };

  return (
    <div className="d-flex justify-content-between align-items-center h-100">
      <CustomModal
        title="Log In"
        action="Log Me In"
        show={showLogin}
        toggleShow={toggleShowLogin}
        handleSubmit={handleLogin}
      >
        <h6>Login: </h6>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmailLogin(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control
              name="password"
              type="Password"
              placeholder="Password"
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
          </Form.Group>
        </Form>
      </CustomModal>
      <CustomModal
        title="Register"
        action="Register Me"
        show={showRegister}
        toggleShow={toggleShowRegister}
        handleSubmit={handleRegister}
      >
        <h6>Register: </h6>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="Password" placeholder="Password" />
          </Form.Group>
        </Form>
      </CustomModal>
      <div>
        <h1>Welcome to InboxCOM!</h1>
        <h2>Sign In to get started</h2>
        <div className="d-flex flex-row pt-2">
          <Button
            variant="primary me-2"
            onClick={() => {
              toggleShowLogin();
            }}
          >
            Sign In
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => {
              toggleShowRegister();
            }}
          >
            Register
          </Button>
        </div>
      </div>
      <Image src={laptopImage} fluid />
    </div>
  );
};

export default HomeScreen;

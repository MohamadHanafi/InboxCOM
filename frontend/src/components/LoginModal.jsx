import React from "react";
import CustomModal from "./CustomModal";

const LoginModal = () => {
  return (
    <>
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
    </>
  );
};

export default LoginModal;

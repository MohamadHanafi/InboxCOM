import React from "react";

//bootstrap
import { Button, Image } from "react-bootstrap";

import laptopImage from "../assets/laptop.png";

const HomeScreen = () => {
  return (
    <div className="d-flex justify-content-between align-items-center h-100">
      <div>
        <h1>Welcome to InboxCOM!</h1>
        <h2>Sign In to get started</h2>
        <div className="d-flex flex-row pt-2">
          <Button variant="primary me-2">Sign In</Button>
          <Button variant="outline-secondary">Register</Button>
        </div>
      </div>
      <Image src={laptopImage} fluid />
    </div>
  );
};

export default HomeScreen;

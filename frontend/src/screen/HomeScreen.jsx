import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//bootstrap
import { Button, Image } from "react-bootstrap";

import laptopImage from "../assets/laptop.png";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";

const HomeScreen = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const [isShown, setIsShown] = useState(true);

  const toggleLogin = () => setShowLogin(!showLogin);
  const toggleRegister = () => setShowRegister(!showRegister);

  const toggleShowRegister = () => setShowRegister(!showRegister);

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      setIsShown(false);
      setShowLogin(false);
      setShowRegister(false);
    } else {
      setIsShown(true);
    }
  }, [userInfo]);

  return (
    <>
      <div
        className={`d-flex justify-content-between align-items-center flex-wrap h-100 ${
          isShown ? "" : "d-none"
        }`}
      >
        <LoginModal show={showLogin} toggleLogin={toggleLogin} />
        <RegisterModal show={showRegister} toggleLogin={toggleRegister} />
        <div>
          <h1>Welcome to InboxCOM!</h1>
          <h2>Sign In to get started</h2>
          <div className="d-flex flex-row pt-2">
            <Button
              variant="primary me-2"
              onClick={() => {
                toggleLogin();
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
      <div
        className={`d-flex flex-column justify-content-between align-items-center flex-wrap h-100 ${
          isShown ? "d-none" : ""
        }`}
      >
        <h1 className="text-center w-100 py-3">
          Welcome {userInfo?.name.split(" ")[0]}!
        </h1>
        <h3 className="text-center w-100 py-3">
          You have <span className="fw-bold">3</span> unread messages out of{" "}
          <span className="fw-bold">10</span> total
        </h3>

        <Button className="my-3" variant="primary" size="lg">
          View your messages
        </Button>
      </div>
    </>
  );
};

export default HomeScreen;

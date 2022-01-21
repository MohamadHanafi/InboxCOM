import React from "react";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//bootstrap
import { Container } from "react-bootstrap";
//Screens
import HomeScreen from "./screen/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;

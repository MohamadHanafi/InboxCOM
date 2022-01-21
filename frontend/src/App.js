import React from "react";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//bootstrap
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Hello World</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};
export default App;

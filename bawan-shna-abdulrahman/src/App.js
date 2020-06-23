import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

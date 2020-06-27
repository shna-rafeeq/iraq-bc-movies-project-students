import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-simple-flex-grid/lib/main.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

export default function App() {
  const [isSpinnerHidden, setIsSpinnerHidden] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [categorie, setCategorie] = useState({});

  const changeCategorie = (categorie) => {
    console.log(categorie);
    setCategorie(categorie);
  };
  const onChange = (e) => {
    setInputSearch(e.target.value);
    setIsSpinnerHidden(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting Name ${inputSearch}`);
    setIsSpinnerHidden(true);
    // setInputSearch("");
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header
          onSubmit={onSubmit}
          onChange={onChange}
          categorie={categorie}
          setCategorie={changeCategorie}
          isSpinnerHidden={isSpinnerHidden}
        />
        <Main
          query={inputSearch}
          categorie={categorie}
          setIsSpinnerHidden={setIsSpinnerHidden}
        />
      </div>
      <Footer />
    </div>
  );
}

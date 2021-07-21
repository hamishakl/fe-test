import React from "react";

import "./App.css";
import "./stylesheets/reset.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import FormWrapper from "./components/FormWrapper";
import CardWrapper from "./components/CardWrapper";
import GalleryWrapper from "./components/GalleryWrapper";

function App() {
  return (
    <>
      <Header />
      <FormWrapper />
      <CardWrapper />
      <GalleryWrapper />
      <Footer />
    </>
  );
}

export default App;
